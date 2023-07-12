import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Profile = () => {
  /* ///////////////Hide Unhide Menu/////////////// */
  const [content, setContent] = useState("main-content");

  /* ///////////////Set Image/////////////// */
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    
  };

  // localStorage.setItem('profileImage', JSON.stringify(selectedFile));

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

  console.log(data, "userDetails");

  /* ///////////////Get User Details by ID/////////////// */

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
                  onChange={handleFileUpload}
                />
              </div>
              <div className="mt-4 mb-3 text-center">
                <button
                  className="btn btn-primary profile-button bg-card2"
                  type="submit"
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
                <form className="form-horizontal">
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
                          placeholder="example: Ahmad"
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
