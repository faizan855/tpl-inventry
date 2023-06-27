import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import Navbar from "./Navbar";
import axios from "axios";

const WHIGPSList = () => {
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

  /* ///////////////Get WHIGPS List/////////////// */

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;
        const response = await axios.get(
          "http://203.170.69.170:8070/api/INVAPI/WhouseIGPs",
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const WHIGPSList = await response.data;

        setData(WHIGPSList);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  /* ///////////////End of Get WHIGPS/////////////// */

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content} style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-success bg-gradient p-4">
              <h1
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Warehouse IGPs
              </h1>
              {/* <p>
                <Link to="/" className="btn btn-danger btn-sm mx-2">
                  Pending Approvals
                </Link>
              </p> */}
            </div>
            <div className="card-body">
              <form
                action="http://203.170.69.170:8070/api/INVAPI/ExportWHIGPS"
                method="post"
                id="exp-date"
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
                          // name="button"
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
                    marginTop: "30px",
                    // borderCollapse: "separate",
                    // borderSpacing: "0 10px",
                  }}
                >
                  <thead>
                    <tr className="mainheader text-center align-middle bg-secondary text-color2">
                      <th>Site ID</th>
                      <th>IGP Data</th>
                      <th>Item Code</th>
                      <th>Item Desc</th>
                      <th>Qty</th>
                      <th>IGP Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="text-center align-middle">
                    {data.map((item, index) => (
                      <tr key={index} style={{ color: "black" }}>
                        <td>{item.sitE_ID}</td>
                        <td>{item.creatioN_DATE}</td>
                        <td> {item.iteM_CODE}</td>
                        <td>{item.iteM_NAME}</td>
                        <td>{item.qty}</td>
                        <td> {item.remarks}</td>
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

export default WHIGPSList;
