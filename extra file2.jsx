import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import Navbar from "../Navbar";
import axios from "axios";
import loadingImage from "../../../../loading.gif";


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

        const List = await response.data;

        setData(List);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
              <div className="table-responsive">
                <table
                  ref={tableRef}
                  className="table table-bordered row-border dataTable no-footer"
                  id="dataTable"
                  width="100%"
                  style={{
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
                          >
                            Remove
                          </button>
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
    </>
  );
};

export default EmpList;
