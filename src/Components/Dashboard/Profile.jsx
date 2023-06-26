import React, { useState } from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const [content, setContent] = useState("main-content");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content}>
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
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="col-lg-3 control-label">First name:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example: Faizan"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Last name:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example: Ahmad"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-3 control-label">Email:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="example: faiz...55@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Address:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="House, Street, Town, City, Country"
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                  <label className="col-lg-3 control-label">Time Zone:</label>
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
                </div> */}

                <div className="mt-4 mb-5" style={{ marginLeft: "25%" }}>
                  <button
                    className="btn btn-primary profile-button bg-card2"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
