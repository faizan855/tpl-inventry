import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loadingImage from "../../../loading.gif";

import $ from "jquery";
import "datatables.net";
import Navbar from "../Navbar";
import axios from "axios";

const EmpList = () => {
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

  /* ///////////////Get UserList/////////////// */

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          "http://203.170.69.170:8070/api/account/EMPLIST",
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

  console.log(data, "data");

  /* ///////////////End of Get UserList/////////////// */

  /* ///////////////Get UserDetail/////////////// */

  const [selectedId, setSelectedId] = useState([0]);
  const [detail, setDetail] = useState([
    {
      sitE_ID: "",
      qtY_REQUIRED: "",
      materiaL_NAME: "",
      reason: "",
      poC_NAME: "",
      poC_CONTACT: "",
      rM_ACTION: "",
      opS_REMARKS: "",
      technicaL_DEPT_REMARKS: "",
      electricaL_REMARKS: "",
    },
  ]);

  // console.log(detail[0].sitE_ID);

  const handleDetailClick = (id) => {
    setSelectedId(id);
  };
  // console.log(selectedId,"selectedId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          `http://203.170.69.170:8070/api/account/UserList?Id=${selectedId}`,
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
              rM_ACTION: "",
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

    if (selectedId) {
      fetchData();
    }
  }, [selectedId]);

  /* ///////////////End of Get UserDetail/////////////// */

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content} style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-success bg-gradient">
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
                htmlFor="string"
              >
                Employee List
              </h4>
              <p>
                <Link to="/" className="btn btn-danger btn-sm mx-2">
                  +Add New Employee
                </Link>
              </p>
            </div>
            <div className="card-body">
              {/* <div className="table-responsive">
                <form
                  action="http://203.170.69.170:8070/api/INVAPI/ExportWHIGPS"
                  method="post"
                >
                  <table className="table table-striped table-bordered">
                    <tbody>
                      <tr className="text-center align-middle bg-info">
                        <td>
                          <label
                            className="bg-success text-light p-2 rounded"
                            htmlFor="start"
                          >
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
                          <label
                            className="bg-success text-light p-2 rounded"
                            htmlFor="start2"
                          >
                            To Date
                          </label>
                        </td>
                        <td>
                          <input
                            type="date"
                            id="start2"
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
              </div> */}

              <div className="table-responsive">
                {isLoading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={loadingImage} alt="Loading" />
                  </div>
                ) : (
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
                        <th>EMP ID#</th>
                        <th>NAME</th>
                        <th>EMP No# (ERP)</th>
                        <th>APPOINTED AT</th>
                        <th>MOBILE</th>
                        <th>SALARY</th>
                        <th>ADDRESS</th>
                        <th>MODIFY</th>
                        <th>Details</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                      {data.map((item, index) => (
                        <tr key={index} style={{ color: "black" }}>
                          <td>{item.emP_ID}</td>
                          <td>{item.emP_NAME}</td>
                          <td>{item.emP_NO}</td>
                          <td>{item.saL_GROUP}</td>
                          <td>{item.mobilE_PHONE}</td>
                          <td>{item.currenT_PAY}</td>
                          <td>{item.permA_ADDRESS}</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-sm btn-block"
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                              // onClick={() => handleDetailClick(item.userid)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-block"
                              style={{
                                backgroundColor: "green",
                                color: "white",
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                              onClick={() => handleDetailClick(item.userid)}
                            >
                              Details
                            </button>
                          </td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-sm btn-block"
                              style={{
                                backgroundColor: "brown",
                                color: "white",
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                              // onClick={() => handleDetailClick(item.prM_ID)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
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
                  User Details
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
                      <th>FULL NAME</th>
                      <th>EMAIL</th>
                      <th>CP EMAIL</th>
                      <th>ADDRESS</th>
                      <th>USER ROLE</th>
                      <th>USER RIGHTS</th>
                    </tr>
                  </thead>
                  <tbody className="text-center align-middle">
                    <tr style={{ color: "black" }}>
                      <td style={{ width: "10%", wordBreak: "break-all" }}>
                        {detail[0].fulL_NAME}
                      </td>
                      <td style={{ width: "10%", wordBreak: "break-all" }}>
                        {detail[0].materiaL_NAME}
                      </td>
                      <td>{detail[0].qtY_REQUIRED}</td>
                      <td>{detail[0].reason}</td>
                      <td>{detail[0].poC_NAME}</td>
                      <td>{detail[0].poC_CONTACT}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
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

export default EmpList;
