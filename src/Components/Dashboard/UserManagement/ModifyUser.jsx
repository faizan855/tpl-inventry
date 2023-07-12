import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const ModifyUser = () => {
  /* ///////////////Hide Unhide Menu/////////////// */

  const [content, setContent] = useState("main-content");

  /* ///////////////Radio Options/////////////// */

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? null : value);
  };

  /* ///////////////Modify User/////////////// */

  let USERID = JSON.parse(localStorage.getItem("USERID"));
  let uname = JSON.parse(localStorage.getItem("USERNAME"));
  let pass = JSON.parse(localStorage.getItem("PASSWORD"));
  let fname = JSON.parse(localStorage.getItem("FULLNAME"));
  let empno = JSON.parse(localStorage.getItem("EMPNO"));
  let uemail = JSON.parse(localStorage.getItem("EMAIL"));
  let ucpemail = JSON.parse(localStorage.getItem("CPEMAIL"));
  let uroles = JSON.parse(localStorage.getItem("USERROLE"));
  let urights = JSON.parse(localStorage.getItem("USERRIGHTS"));

  const [username, setUsername] = useState(uname);
  const [passwords, setPasswords] = useState(pass);
  const [fulL_NAME, setFulL_NAME] = useState(fname);
  const [email, setEmail] = useState(uemail);
  const [ccobemail, setCcobemail] = useState(ucpemail);
  const [useR_ROLE, setUseR_ROLE] = useState(uroles);
  const [useR_RIGHTS, setUseR_RIGHTS] = useState(urights);

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

  // console.log(USERID, empno);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://203.170.69.170:8070/api/account/RegisterUser`,

        {
          USERID,
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

      console.log(USERID, "ok");
      alert("Data Saved");
    } catch {
      console.log(USERID, "not ok");

      alert("Error");
    }
  };

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content} style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-warning bg-gradient">
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
                htmlFor="string"
              >
                Modify Existing User
              </h4>
              <p>
                <Link
                  to="/dashboard/new-user"
                  className="btn btn-success btn-sm mx-2 "
                >
                  +Create New User
                </Link>
              </p>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <div className="col-md-9 personal-info">
                <div className="alert alert-info alert-dismissable ">
                  Please Edit the Form
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
                            defaultValue={uname}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="2">
                          Password:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="2"
                            className="form-control"
                            type="password"
                            defaultValue={pass}
                            onChange={(e) => setPasswords(e.target.value)}
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
                            defaultValue={fname}
                            onChange={(e) => setFulL_NAME(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label className="col-lg-3 control-label" htmlFor="4">
                          Employee ID:
                        </label>
                        <div className="col-lg-11">
                          <input
                            id="4"
                            className="form-control"
                            type="number"
                            defaultValue={empno}
                            disabled
                          />
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
                            defaultValue={uemail}
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
                            defaultValue={ucpemail}
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
                            defaultValue={uroles}
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
                            defaultValue={urights}
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

export default ModifyUser;
