import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const CreateUser = () => {
  /* ///////////////Hide Unhide Menu/////////////// */

  const [content, setContent] = useState("main-content");

  /* ///////////////Get EmpList/////////////// */

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  /* ///////////////End of Get EmpList/////////////// */

  /* ///////////////Radio Options/////////////// */

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? null : value);
  };

  /* ///////////////Register New User/////////////// */

  const [username, setUsername] = useState("");
  const [passwords, setPasswords] = useState("");
  const [fulL_NAME, setFulL_NAME] = useState("");
  const [empno, setEmpno] = useState("");
  const [email, setEmail] = useState("");
  const [ccobemail, setCcobemail] = useState("");
  const [useR_ROLE, setUseR_ROLE] = useState("");
  const [useR_RIGHTS, setUseR_RIGHTS] = useState("");

  const [iS_SUPERADMIN, setIS_SUPERADMIN] = useState(null);
  const [iS_OPMN, setIS_OPMN] = useState(null);
  const [iS_ELECTRICAL, setIS_ELECTRICAL] = useState(null);
  const [iS_TECHNICAL, setIS_TECHNICAL] = useState("");
  const [iS_MECHANICAL, setIS_MECHANICAL] = useState("");
  const [iS_INVENTORY, setIS_INVENTORY] = useState("");
  const [fuelinG_NOC, setFuelinG_NOC] = useState("");
  const [factorY_ADMIN, setFactorY_ADMIN] = useState("");
  const [civiL_USER, setCiviL_USER] = useState("");
  const [civiL_HEAD, setCiviL_HEAD] = useState("");
  const [inventorY_HEAD, setInventorY_HEADS] = useState("");

  useEffect(() => {
    if (selectedOption === "none" || selectedOption === null) {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);

      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_SUPERADMIN") {
      setIS_SUPERADMIN("Y");
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_OPMN") {
      setIS_SUPERADMIN(null);
      setIS_OPMN("Y");
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_ELECTRICAL") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL("Y");
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_TECHNICAL") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL("Y");
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_MECHANICAL") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL("Y");
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "iS_INVENTORY") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY("Y");
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "fuelinG_NOC") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC("Y");
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "factorY_ADMIN") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN("Y");
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "civiL_USER") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER("Y");
      setCiviL_HEAD(null);
      setInventorY_HEADS(null);
    }
    if (selectedOption === "civiL_HEAD") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD("Y");
      setInventorY_HEADS(null);
    }
    if (selectedOption === "inventorY_HEAD") {
      setIS_SUPERADMIN(null);
      setIS_OPMN(null);
      setIS_ELECTRICAL(null);
      setIS_TECHNICAL(null);
      setIS_MECHANICAL(null);
      setIS_INVENTORY(null);
      setFuelinG_NOC(null);
      setFactorY_ADMIN(null);
      setCiviL_USER(null);
      setCiviL_HEAD(null);
      setInventorY_HEADS("Y");
    }
  }, [selectedOption]);

  // console.log(iS_SUPERADMIN, "|admin");
  // console.log(iS_OPMN, "|opm");
  // console.log(iS_ELECTRICAL, "|electric");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://203.170.69.170:8070/api/account/RegisterUser`,

        {
          username,
          passwords,
          fulL_NAME,
          empno,
          email,
          ccobemail,
          useR_ROLE,
          useR_RIGHTS,

          iS_SUPERADMIN,
          iS_OPMN,
          iS_ELECTRICAL,
          iS_TECHNICAL,
          iS_MECHANICAL,
          iS_INVENTORY,
          fuelinG_NOC,
          factorY_ADMIN,
          civiL_USER,
          civiL_HEAD,
          inventorY_HEAD,
        }
      );
      console.log(response);
      alert("Data Saved");
    } catch {
      alert("Error");
    }
  };

  /* ///////////////End of Register New User/////////////// */

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
                Create New User
              </h4>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <div className="col-md-9 personal-info">
                <div className="alert alert-info alert-dismissable ">
                  Please Fill the Form
                </div>
                <h3>User info</h3>

                <div className="row">
                  <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="row mt-1">
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="1">
                          User Name:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="1"
                            className="form-control"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="2">
                          Password:
                        </label>
                        <div className="col-lg-11">
                          <input
                            name="password"
                            id="2"
                            className="input form-control"
                            type="password"
                            onChange={(e) => setPasswords(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="3">
                          Full Name:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="3"
                            className="form-control"
                            type="text"
                            onChange={(e) => setFulL_NAME(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="4">
                          Employee Name:
                        </label>
                        <div className="col-lg-11">
                          <select
                            id="4"
                            className="form-control"
                            required
                            onChange={(event) =>
                              setEmpno(parseInt(event.target.value))
                            }
                          >
                            <option value="">Select Employee</option>
                            {data.map((employee) => (
                              <option
                                key={employee.emP_ID}
                                value={employee.emP_ID}
                              >
                                {employee.emP_NAME}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="5">
                          Email:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="5"
                            className="form-control"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="6">
                          CP Email:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="6"
                            className="form-control"
                            type="text"
                            onChange={(e) => setCcobemail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="7">
                          User Role:
                        </label>
                        <div className="col-lg-11">
                          <select
                            id="7"
                            className="form-control"
                            required
                            onChange={(event) =>
                              setUseR_ROLE(event.target.value)
                            }
                          >
                            <option>Select User Authentication Roles</option>
                            <option value="Accounts">Accounts</option>
                            <option value="AUDITOR">AUDITOR</option>
                            <option value="Director">Director</option>
                            <option value="HRM">HRM</option>
                            <option value="Manager">Manager</option>
                            <option value="User">User</option>
                            <option value="OperationDirector">
                              Operation Director
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="8">
                          User Rights:
                        </label>
                        <div className="col-lg-11">
                          <select
                            id="8"
                            className="form-control"
                            required
                            onChange={(e) => setUseR_RIGHTS(e.target.value)}
                          >
                            <option>Select User Authentication Rights</option>
                            <option value="Auditor">Auditor</option>
                            <option value="CPAuditor">CP Auditor</option>
                            <option value="SAUser">Site Aquisition User</option>
                            <option value="SAManager">
                              Site Aquisition Manager
                            </option>
                            <option value="COO">Chief Operating Officer</option>
                            <option value="PowerUser">Power User</option>
                            <option value="Administrator">Administrator</option>
                            <option value="Accounts">Accounts</option>
                            <option value="User">User</option>
                            <option value="POC">POC</option>
                            <option value="OpsSupervisor">
                              Ops Supervisor
                            </option>
                            <option value="SiteManager">Site Manager</option>
                            <option value="OpsDirector">Ops Director</option>
                            <option value="OM Director">OM Director</option>
                            <option value="HRM">HRM</option>
                            <option value="Electrical">Electrical</option>
                            <option value="FuelingNOC">Fueling NOC</option>
                            <option value="CIVIL">Civil</option>
                            <option value="CIVILHEAD">Civil Head</option>
                            <option value="PM_STAFF">PM Staff</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ padding: "inherit", marginTop: "2%" }}
                    >
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="13">
                          None
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="none"
                          name="role"
                          id=""
                          checked={selectedOption === null}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="9">
                          Super Admin
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_SUPERADMIN"
                          name="role"
                          id="9"
                          checked={selectedOption === "iS_SUPERADMIN"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="10">
                          Manager Operation
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_OPMN"
                          name="role"
                          id="10"
                          checked={selectedOption === "iS_OPMN"}
                          onChange={handleOptionChange}
                        />
                      </div>

                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="11">
                          Electrical Head
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_ELECTRICAL"
                          name="role"
                          id="11"
                          checked={selectedOption === "iS_ELECTRICAL"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="12">
                          Technical Head
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_TECHNICAL"
                          name="role"
                          id="12"
                          checked={selectedOption === "iS_TECHNICAL"}
                          onChange={handleOptionChange}
                        />
                      </div>

                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label" htmlFor="14">
                          IS Mechanical
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_MECHANICAL"
                          name="role"
                          id="14"
                          checked={selectedOption === "iS_MECHANICAL"}
                          onChange={handleOptionChange}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ padding: "inherit", marginTop: "2%" }}
                    >
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="15">
                          Inventory User
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="iS_INVENTORY"
                          name="role"
                          id="15"
                          checked={selectedOption === "iS_INVENTORY"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="16">
                          Is Fueling NOC
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="fuelinG_NOC"
                          name="role"
                          id="16"
                          checked={selectedOption === "fuelinG_NOC"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="17">
                          Factory Admin
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="factorY_ADMIN"
                          name="role"
                          id="17"
                          checked={selectedOption === "factorY_ADMIN"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="18">
                          Civil User
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="civiL_USER"
                          name="role"
                          id="18"
                          checked={selectedOption === "civiL_USER"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="19">
                          Civil Head
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="civiL_HEAD"
                          name="role"
                          id="19"
                          checked={selectedOption === "civiL_HEAD"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="col-lg-2 col-sm-12 form-check">
                        <label className="form-check-label " htmlFor="20">
                          Inventory Head
                        </label>

                        <input
                          className="form-check-input"
                          type="radio"
                          value="inventorY_HEAD"
                          name="role"
                          id="20"
                          checked={selectedOption === "inventorY_HEAD"}
                          onChange={handleOptionChange}
                        />
                      </div>
                    </div>
                    {/* Save Button */}
                    <div className="mt-5 mb-5 text-center d-grid">
                      <button
                        className="btn btn-primary btn-block btn-lg profile-button bg-card2"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
