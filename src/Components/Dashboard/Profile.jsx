import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Profile = () => {
  /* ///////////////Hide Unhide Menu/////////////// */
  const [content, setContent] = useState("main-content");

  /* ///////////////Set Image/////////////// */

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      setSelectedFile(storedImage);
    }
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setSelectedFile(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      localStorage.setItem("userImage", selectedFile);
      alert("Picture uploaded successfully");
    }
  };

  /* ///////////////Get User ID/////////////// */

  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let token = JSON.parse(localStorage.getItem("Token"));
      let key = token.token;
      try {
        const response = await axios.get(
          "http://203.170.69.170:8070/api/Account/Claims",
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const claims = response.data;
        const userId = claims.userid;
        setUid(userId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  /* ///////////////Get User ID/////////////// */

  /* ///////////////Get User Details by ID/////////////// */

  const [data, setData] = useState({
    userid: "",
    username: "",
    empno: "",
    passwords: "",
    useR_ROLE: "",
    useR_LOCATION: "",
    useR_RIGHTS: "",
    fulL_NAME: "",
    email: "",
    iS_SUPERADMIN: "",
    iS_ELECTRICAL: "",
    iS_TECHNICAL: "",
    iS_STORE: "",
    iS_OPMN: "",
    iS_INVENTORY: "",
    ccobemail: "",
    iS_MECHANICAL: "",
    fuelinG_NOC: "",
    factorY_ADMIN: "",
    civiL_USER: "",
    civiL_HEAD: "",
    inventorY_HEAD: "",
    pM_STAFF: "",
  });

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;

        const response = await axios.get(
          `http://203.170.69.170:8070/api/account/UserDetail?Id=${uid}`,
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const userDetails = response.data;

        setData({
          userid: userDetails.userid,
          username: userDetails.username,
          empno: userDetails.empno,
          passwords: userDetails.passwords,
          useR_ROLE: userDetails.useR_ROLE,
          useR_LOCATION: userDetails.useR_LOCATION,
          useR_RIGHTS: userDetails.useR_RIGHTS,
          fulL_NAME: userDetails.fulL_NAME,
          email: userDetails.email,
          iS_SUPERADMIN: userDetails.iS_SUPERADMIN,
          iS_ELECTRICAL: userDetails.iS_ELECTRICAL,
          iS_TECHNICAL: userDetails.iS_TECHNICAL,
          iS_STORE: userDetails.iS_STORE,
          iS_OPMN: userDetails.iS_OPMN,
          iS_INVENTORY: userDetails.iS_INVENTORY,
          ccobemail: userDetails.ccobemail,
          iS_MECHANICAL: userDetails.iS_MECHANICAL,
          fuelinG_NOC: userDetails.fuelinG_NOC,
          factorY_ADMIN: userDetails.factorY_ADMIN,
          civiL_USER: userDetails.civiL_USER,
          civiL_HEAD: userDetails.civiL_HEAD,
          inventorY_HEAD: userDetails.inventorY_HEAD,
          pM_STAFF: userDetails.pM_STAFF,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (uid) {
      fetchDetail();
    }
  }, [uid]);

  // console.log(data, "userDetails");

  /* ///////////////Get User Details by ID/////////////// */

  /* ///////////////Modify User/////////////// */

  const [username, setUsername] = useState("");
  const [fulL_NAME, setFulL_NAME] = useState("");
  const [email, setEmail] = useState("");

  const [passwords, setPasswords] = useState("");
  const [empno, setEmpno] = useState("");
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
    if (data.username) {
      setUsername(data.username);
    }
    if (data.fulL_NAME) {
      setFulL_NAME(data.fulL_NAME);
    }
    if (data.email) {
      setEmail(data.email);
    }
    if (data.passwords) {
      setPasswords(data.passwords);
    }
    if (data.empno) {
      setEmpno(data.empno);
    }
    if (data.ccobemail) {
      setCcobemail(data.ccobemail);
    }
    if (data.useR_ROLE) {
      setUseR_ROLE(data.useR_ROLE);
    }
    if (data.useR_RIGHTS) {
      setUseR_RIGHTS(data.useR_RIGHTS);
    }
    if (data.iS_SUPERADMIN) {
      setIS_SUPERADMIN(data.iS_SUPERADMIN);
    }

    if (data.iS_OPMN) {
      setIS_OPMN(data.iS_OPMN);
    }
    if (data.iS_ELECTRICAL) {
      setIS_ELECTRICAL(data.iS_ELECTRICAL);
    }
    if (data.iS_TECHNICAL) {
      setIS_TECHNICAL(data.iS_TECHNICAL);
    }
    if (data.iS_MECHANICAL) {
      setIS_MECHANICAL(data.iS_MECHANICAL);
    }
    if (data.iS_INVENTORY) {
      setIS_INVENTORY(data.iS_INVENTORY);
    }
    if (data.fuelinG_NOC) {
      setFuelinG_NOC(data.fuelinG_NOC);
    }
    if (data.factorY_ADMIN) {
      setFactorY_ADMIN(data.factorY_ADMIN);
    }
    if (data.civiL_USER) {
      setCiviL_USER(data.civiL_USER);
    }
    if (data.civiL_HEAD) {
      setCiviL_HEAD(data.civiL_HEAD);
    }
    if (data.inventorY_HEAD) {
      setInventorY_HEADS(data.inventorY_HEAD);
    }
  }, [
    data.username,
    data.fulL_NAME,
    data.email,
    data.passwords,
    data.empno,
    data.ccobemail,
    data.useR_ROLE,
    data.useR_RIGHTS,
    data.iS_SUPERADMIN,
    data.iS_OPMN,
    data.iS_ELECTRICAL,
    data.iS_TECHNICAL,
    data.iS_MECHANICAL,
    data.iS_INVENTORY,
    data.fuelinG_NOC,
    data.factorY_ADMIN,
    data.civiL_USER,
    data.civiL_HEAD,
    data.inventorY_HEAD,
  ]);

  // console.log(
  //   uid,
  //   username,
  //   fulL_NAME,
  //   email,
  //   passwords,
  //   empno,
  //   ccobemail,
  //   useR_ROLE,
  //   useR_RIGHTS,

  //   iS_SUPERADMIN,
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://203.170.69.170:8070/api/account/RegisterUser`,

        {
          USERID: uid,
          username,
          fulL_NAME,
          email,

          passwords,
          empno,
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

      console.log("ok");
      alert("Data Saved");
    } catch {
      console.log("not ok");
      alert("Error");
    }
  };

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div
        className={content}
        style={{
          marginTop: "70px",
        }}
      >
        <div className="container bootstrap snippets bootdey">
          <h1 className="text-color4">Edit Profile</h1>

          <hr />

          <div className="row">
            {/*edit left column */}

            <div className="col-md-3">
              <div className="text-center">
                <img
                  src={
                    selectedFile ||
                    "https://bootdey.com/img/Content/avatar/avatar7.png"
                  }
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6 className="mt-3 mb-3">Upload a different photo...</h6>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileSelect}
                />
              </div>
              <div className="mt-4 mb-3 text-center">
                <button
                  className="btn btn-primary profile-button bg-card2"
                  type="button"
                  onClick={handleFileUpload}
                >
                  Upload
                </button>
              </div>
            </div>
            {/* edit right column */}

            <div className="col-md-9 personal-info">
              <div className="alert alert-info alert-dismissable ">
                Please Fill the Form
              </div>
              <h3>Personal info</h3>

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
                          defaultValue={data.username}
                          placeholder="example: Faizan"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="1">
                        User ID:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="1"
                          className="form-control"
                          type="text"
                          defaultValue={data.userid}
                          placeholder="example: Faizan"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="2">
                        Full Name:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="2"
                          className="form-control"
                          type="text"
                          defaultValue={data.fulL_NAME}
                          placeholder="example: Faizan Ahmad"
                          onChange={(e) => setFulL_NAME(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="2">
                        Employee ID:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="2"
                          className="form-control"
                          type="text"
                          defaultValue={data.empno}
                          placeholder="example: Ahmad"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="3">
                        Email:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="3"
                          className="form-control"
                          type="text"
                          defaultValue={data.email}
                          placeholder="example: faiz...55@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="3">
                        Address :
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="4"
                          className="form-control"
                          type="text"
                          defaultValue={data.useR_LOCATION}
                          placeholder="House, Street, Town, City, Country"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="4">
                        User Rights:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="4"
                          className="form-control"
                          type="text"
                          defaultValue={data.useR_RIGHTS}
                          placeholder="House, Street, Town, City, Country"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label className="col-lg-3 control-label" htmlFor="4">
                        User Role:
                      </label>
                      <div className="col-lg-11">
                        <input
                          id="4"
                          className="form-control"
                          type="text"
                          defaultValue={data.useR_ROLE}
                          placeholder="House, Street, Town, City, Country"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="mt-5 mb-5 text-center">
                    <button
                      className="btn btn-primary profile-button bg-card2"
                      type="submit"
                    >
                      Save Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

/* <div className="form-group">
                  <label className="col-lg-3 control-label" htmlFor="time"> Time Zone:</label>
                  <div className="col-lg-8">
                    <div className="ui-select">
                      <select id="user_time_zone" className="form-control">
                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                        <option value="Alaska">(GMT-09:00) Alaska</option>
                        <option value="Pacific Time (US & Canada)">
                          (GMT-08:00) Pacific Time (US &amp; Canada)
                        </option>
                        <option value="Arizona">(GMT-07:00) Arizona</option>
                        <option value="Mountain Time (US & Canada)">
                          (GMT-07:00) Mountain Time (US &amp; Canada)
                        </option>
                        <option
                          value="Central Time (US & Canada)"
                          selected="selected"
                        >
                          (GMT-06:00) Central Time (US &amp; Canada)
                        </option>
                        <option value="Eastern Time (US & Canada)">
                          (GMT-05:00) Eastern Time (US &amp; Canada)
                        </option>
                        <option value="Indiana (East)">
                          (GMT-05:00) Indiana (East)
                        </option>
                      </select>
                    </div>
                  </div>
                </div> */
