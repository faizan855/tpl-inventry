import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { MRNContext } from "../../MRNContext";
import $ from "jquery";
import "datatables.net";
import Navbar from "../Navbar";
import axios from "axios";

const MRNList = () => {
  /* ///////////////useContext/////////////// */

  // const { setMRNId } = useContext(MRNContext);

  /* ///////////////Hide Unhide Menu/////////////// */

  const [content, setContent] = useState("main-content");

  /* ///////////////Datatables Jquery/////////////// */

  const [isLoading, setIsLoading] = useState(true);
  const tableRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      const table = $(tableRef.current).DataTable();
      return () => {
        table.destroy();
      };
    }
  }, [isLoading]);

  /* ///////////////Get MRNList/////////////// */

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          "http://203.170.69.170:8070/api/INVAPI/MRNList",
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const MRNList = await response.data;

        setData(MRNList);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  /* ///////////////End of Get MRNList/////////////// */

  /* ///////////////Get MRNDetail/////////////// */

  const [selectedItem, setSelectedItem] = useState([0]);
  const [detail, setDetail] = useState([
    {
      sitE_ID: "",
      qtY_REQUIRED: "",
      materiaL_NAME: "",
      reason: "",
      poC_NAME: "",
      poC_CONTACT: "",
      rM_ACTION:"",
      opS_REMARKS: "",
      technicaL_DEPT_REMARKS: "",
      electricaL_REMARKS: "",
    },
  ]);

  // console.log(detail[0].sitE_ID);

  const handleDetailClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          `http://203.170.69.170:8070/api/INVAPI/MRNDetail?Id=${selectedItem}`,
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const MRNDetail = await response.data;

        if (
          MRNDetail[0] === undefined ||
          MRNDetail[0] === null ||
          MRNDetail[0] === ""
        ) {
          setDetail([
            {
              sitE_ID: "",
              qtY_REQUIRED: "",
              materiaL_NAME: "",
              reason: "",
              poC_NAME: "",
              poC_CONTACT: "",
              rM_ACTION:"",
              opS_REMARKS: "",
              technicaL_DEPT_REMARKS: "",
              electricaL_REMARKS: "",
            },
          ]);
        } else {
          setDetail(MRNDetail);
        }

        // console.log(MRNDetail,"MRNDetail");
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedItem) {
      fetchData();
    }
  }, [selectedItem]);

  /* ///////////////End of Get MRNDetail/////////////// */

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content} style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-success bg-gradient">
              <label
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                MRN Approval List
              </label>
              <p>
                <Link to="/" className="btn btn-danger btn-sm mx-2">
                  Pending Approvals
                </Link>
              </p>
            </div>
            <div className="card-body">
              <form
                action="http://203.170.69.170:8070/api/INVAPI/ExportWHIGPS"
                method="post"
              >
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr className="text-center align-middle bg-info">
                      <td>
                        <label className="bg-success text-light p-2 rounded">
                          From Date
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="start"
                          name="FromDate"
                          placeholder="From Date"
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <label className="bg-success text-light p-2 rounded">
                          To Date
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="start"
                          name="ToDate"
                          placeholder="From Date"
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-success btn-sm"
                          style={{
                            color: "white",
                            backgroundColor: "green",
                          }}
                          type="submit"
                        >
                          Export To Excel &nbsp;
                          <i className="fab fa-microsoft" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="Need to be set"
                />
              </form>

              <div className="table-responsive">
                <table
                  ref={tableRef}
                  className="table table-bordered row-border dataTable no-footer"
                  id="dataTable"
                  width="100%"
                  // cellSpacing={10}
                  style={{
                    // marginTop: "30px",
                    borderCollapse: "separate",
                    borderSpacing: "0 10px",
                  }}
                >
                  <thead>
                    <tr className="mainheader text-center align-middle  bg-secondary text-color2">
                      <th>Req#</th>
                      <th>Priority</th>
                      <th>Site ID</th>
                      <th>User Remarks</th>
                      <th>Request Date</th>
                      <th>Raised From</th>
                      <th>Status</th>
                      <th>Factory Remarks</th>
                      <th>MRN Closed By RM</th>
                      <th>Details</th>
                      <th>Directions</th>
                    </tr>
                  </thead>
                  <tbody className="text-center align-middle">
                    {data.map((item, index) => (
                      <tr key={index} style={{ color: "black" }}>
                        <td>{item.prM_ID}</td>

                        {item.priority === 1 && (
                          <td
                            style={{
                              backgroundColor: "red",
                              fontSize: "14px",
                              fontWeight: "bolder",
                              WebkitTextAlign: "center",
                              textAlign: "center",
                              padding: "10px",
                            }}
                          >
                            <label>High</label>
                          </td>
                        )}
                        {item.priority === 2 && (
                          <td
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              fontSize: "14px",
                              fontWeight: "bolder",
                              WebkitTextAlign: "center",
                              textAlign: "center",
                              padding: "10px",
                            }}
                          >
                            <label>Normal</label>
                          </td>
                        )}
                        {item.priority === 3 && (
                          <td
                            style={{
                              backgroundColor: "yellow",
                              fontSize: "14px",
                              fontWeight: "bolder",
                              WebkitTextAlign: "center",
                              textAlign: "center",
                              padding: "10px",
                            }}
                          >
                            <label>Low</label>
                          </td>
                        )}
                        {(item.priority === null ||
                          item.priority === undefined) && (
                          <td
                            style={{
                              backgroundColor: "yellow",
                              fontSize: "14px",
                              fontWeight: "bolder",
                              WebkitTextAlign: "center",
                              textAlign: "center",
                              padding: "10px",
                            }}
                          >
                            <label>Low</label>
                          </td>
                        )}
                        <td>{item.sitE_ID}</td>
                        <td>{item.remarks}</td>
                        <td> {item.requesT_DATE}</td>
                        <td>{item.createD_BY_NAME}</td>
                        <td>{item.status}</td>
                        <td>{item.factorY_REMARKS}</td>
                        <td>--</td>
                        <td>
                          {/* <Link
                            className="btn btn-primary btn-sm btn-block"
                            to={`/dashboard/MRNDetail/`}
                            onClick={() => setMRNId(item.prM_ID)}
                          >
                            Details
                          </Link> */}
                          <button
                            type="button"
                            className="btn btn-sm btn-block"
                            style={{
                              backgroundColor: "brown",
                              color: "white",
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => handleDetailClick(item.prM_ID)}
                          >
                            Details
                          </button>
                        </td>
                        <td className="d-flex flex-column">
                          <Link
                            to="http://203.170.69.170:8070/Inventory/StockLedgerMRN/710"
                            className="btn btn-secondary btn-sm btn-block mx-2 my-1"
                          >
                            Stock
                          </Link>
                          <button
                            type="button"
                            className="btn btn-info btn-block btn-sm mx-2 my-1"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Approvals+
                          </button>
                          <button
                            type="button"
                            className="btn btn-info btn-block btn-sm mx-2 my-1"
                            data-toggle="collapse"
                            data-target="#demo1"
                          >
                            M. Details+
                          </button>

                          <Link
                            to="http://203.170.69.170:8070/Operations/DispatchDetail/710?T=R"
                            className="btn btn-info btn-sm btn-block mx-2 my-1"
                          >
                            Dispatch Detail
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////Modal/////////////////// */}

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
            <div
                className="modal-title bg-success bg-gradient text-light rounded d-flex align-items-center"
                style={{
                  width: "95%",
                  height: "100px",
                  padding: "20px",
                }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Material Details
                </h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="table-responsive">
                <table
                  // ref={tableRef}
                  className="table table-bordered row-border dataTable no-footer"
                  id="dataTable"
                  width="100%"
                  // cellSpacing={0}
                  style={{ marginTop: "30px" }}
                >
                  <thead className="text-center align-middle">
                    <tr className="mainheader text-center align-middle bg-orange text-color2">
                      <th>Site ID</th>
                      <th>Required Material</th>
                      <th>Qty Required</th>
                      <th>Reason</th>
                      <th>POC Name</th>
                      <th>POC Contact</th>
                      <th>Attachments</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-center align-middle">
                    <tr style={{ color: "black" }}>
                      <td style={{ width: "10%", wordBreak: "break-all" }}>
                        {detail[0].sitE_ID}
                      </td>
                      <td style={{ width: "10%", wordBreak: "break-all" }}>
                        {detail[0].materiaL_NAME}
                      </td>
                      <td>{detail[0].qtY_REQUIRED}</td>
                      <td>{detail[0].reason}</td>
                      <td>{detail[0].poC_NAME}</td>
                      <td>{detail[0].poC_CONTACT}</td>
                      <td>
                        <Link
                          to="/dashboard/MRNDetail"
                          className="btn btn-primary btn-sm btn-block"
                        >
                          Attachments List
                        </Link>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div className="container details-con">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 details-div">
                      Operation Manager Remarks:
                    </div>
                    <div className="col-lg-8 col-sm-12 ">
                      {detail[0].opS_REMARKS}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-sm-12 details-div">
                      RM Action:
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      {detail[0].rM_ACTION}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-sm-12 details-div">
                      Technical Dept Remarks:
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      {detail[0].electricaL_REMARKS}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-sm-12 details-div">
                      Electrical Dept Remarks:
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      {detail[0].technicaL_DEPT_REMARKS}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////End of Modal /////////////////// */}
    </>
  );
};

export default MRNList;
