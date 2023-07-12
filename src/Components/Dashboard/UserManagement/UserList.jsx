import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loadingImage from "../../../loading.gif";
import $ from "jquery";
import "datatables.net";
import Navbar from "../Navbar";
import axios from "axios";

const Userlist = () => {
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

  /* ///////////////Delete User/////////////// */

  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to remove this user?");

    if (result) {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.post(
          `http://203.170.69.170:8070/api/account/RemoveUser?Id=${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );
        alert(`User with ID ${id} has been deleted successfully`);
        setDeleted(true);
        console.log(response);
      } catch (error) {
        alert("Error deleting user:", error);
      }
    }
  };

  /* ///////////////End of Delete User/////////////// */

  /* ///////////////Get UserList/////////////// */

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          "http://203.170.69.170:8070/api/account/UserList",
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
  }, [deleted]);

  // console.log(data);

  /* ///////////////End of Get UserList/////////////// */

  /* ///////////////Get UserDetail/////////////// */

  const [selectedId, setSelectedId] = useState([0]);
  const [detail, setDetail] = useState({
    // userid: "",
    // username: "",
    // passwords: "",
    // fulL_NAME: "",
    // empno: "",
    // email: "",
    // ccobemail: "",
    // useR_ROLE: "",
    // useR_RIGHTS: "",
  });

  // console.log(detail, "singalllllllllllllll");
  // console.log(detail.fulL_NAME, "singalllllllllllllll");

  const handleDetailClick = (id) => {
    setSelectedId(id);
  };
  // console.log(selectedId, "selectedId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        // console.log(selectedId,"selectedId");

        const response = await axios.get(
          `http://203.170.69.170:8070/api/account/UserDetail?Id=${selectedId}`,
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const userDetail = await response.data;
        console.log(userDetail, "userDetail");
        if (
          userDetail === undefined ||
          userDetail === null ||
          userDetail === ""
        ) {
          setDetail({
            userid: "",
            username: "",
            passwords: "",
            fulL_NAME: "",
            empno: "",
            email: "",
            ccobemail: "",
            useR_ROLE: "",
            useR_RIGHTS: "",
          });
        } else {
          setDetail(userDetail);
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

  /* ///////////////Edit User/////////////// */

  const handleEditdetails = (
    id,
    no,
    username,
    password,
    fullname,
    email,
    cpemail,
    userrole,
    userrights
  ) => {
    localStorage.setItem("USERID", JSON.stringify(id));
    localStorage.setItem("EMPNO", JSON.stringify(no));
    localStorage.setItem("USERNAME", JSON.stringify(username));
    localStorage.setItem("PASSWORD", JSON.stringify(password));
    localStorage.setItem("FULLNAME", JSON.stringify(fullname));
    localStorage.setItem("EMAIL", JSON.stringify(email));
    localStorage.setItem("CPEMAIL", JSON.stringify(cpemail));
    localStorage.setItem("USERROLE", JSON.stringify(userrole));
    localStorage.setItem("USERRIGHTS", JSON.stringify(userrights));
  };

  /* ///////////////End of Edit User/////////////// */

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
                User List
              </h4>
              <p>
                <Link
                  to="/dashboard/new-user"
                  className="btn btn-danger btn-sm mx-2"
                >
                  +Create New User
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
                        <th>USER ID#</th>
                        <th>USERNAME</th>
                        <th>PASSWORDS</th>
                        <th>USER ROLE</th>
                        <th>USER RIGHTS</th>
                        <th>MODIFY</th>
                        <th>Details</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                      {data.map((item, index) => (
                        <tr key={index} style={{ color: "black" }}>
                          <td>{item.empno}</td>
                          <td>{item.userid}</td>

                          <td>{item.username}</td>

                          <td>{item.passwords}</td>
                          <td> {item.useR_ROLE}</td>
                          <td>{item.useR_RIGHTS}</td>
                          <td>
                            {" "}
                            <Link
                              type="button"
                              className="btn btn-sm btn-block"
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                              }}
                              to="/dashboard/edit-user"
                              onClick={() =>
                                handleEditdetails(
                                  item.userid,
                                  item.empno,
                                  item.username,
                                  item.passwords,
                                  item.fulL_NAME,
                                  item.email,
                                  item.ccobemail,
                                  item.useR_ROLE,
                                  item.useR_RIGHTS
                                )
                              }
                              // onClick={() => setSendId(item.userid)}
                            >
                              Edit
                            </Link>
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
                              onClick={() => handleDelete(item.userid)}
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
                      <th>USER NAME</th>
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
                        {detail.fulL_NAME}
                      </td>
                      <td>{detail.username}</td>
                      <td style={{ width: "10%", wordBreak: "break-all" }}>
                        {detail.email}
                      </td>
                      <td> {detail.ccobemail}</td>
                      <td> {detail.useR_LOCATION}</td>
                      <td> {detail.useR_ROLE}</td>
                      <td> {detail.useR_RIGHTS}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                {/* <div className="container details-con">
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
                </div> */}
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

export default Userlist;
