import React, { useState } from "react";
import "./Changepassword.css";
import Logo from "../../../logo.png";
import axios from "axios";
import Navbar from "../../Dashboard/Navbar";

const Changepassword = () => {
  var uidClaim;
  /* ///////////////Hide Unhide Menu/////////////// */
  const [content, setContent] = useState("main-content");

  /* ///////////////Get Claims & Change Password/////////////// */

  const [passwords, setPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordsChange = (e) => {
    setPasswords(e.target.value);
    setError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwords !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setPasswords("");
    setConfirmPassword("");
    setError("");

    /* ///////////////Get User ID/////////////// */

    try {
      let token = JSON.parse(localStorage.getItem("Token"));
      let key = token.token;
      const response = await axios.get(
        "http://203.170.69.170:8070/api/Account/Claims",
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );

      const claims = response.data;
      uidClaim = claims.userid;
    } catch (error) {
      console.error(error);
    }

    /* ///////////////Changepassword by User ID/////////////// */

    try {
      const response = await axios.post(
        `http://203.170.69.170:8070/api/Account/ChangePassword`,
        {
          passwords,
          userid: uidClaim,
        }
      );
      console.log(response, "password changed");
      alert("Your Password has been Changed");
    } catch {
      alert("Invalid Login Details");
    }
  };

  return (
    <>
      <Navbar setContentsend={setContent} />
      <section
        className={content}
        style={{
          marginTop: "70px"
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card2 shadow-2-strong bg-card">
                <div className="card-body p-4 text-center">
                  <img src={Logo} alt="" />
                  <h3 className="mb-3 text-color3">Change your Password</h3>

                  <form onSubmit={handleSubmit}>
                    {error && <div className="text-color3 mb-4 ">{error}</div>}
                    <div className="form-outline mb-4">
                      <input
                        id="password"
                        type="password"
                        value={passwords}
                        className="form-control form-control-lg form-controlcustum"
                        onChange={handlePasswordsChange}
                        required
                      />
                      <label
                        className="form-label text-color3"
                        htmlFor="password"
                      >
                        New Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        id="cpassword"
                        type="password"
                        value={confirmPassword}
                        className="form-control form-control-lg form-controlcustum"
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      <label
                        className="form-label text-color3"
                        htmlFor="cpassword"
                      >
                        Confirm Password
                      </label>
                    </div>

                    <button
                      className="btn btn-warning btn-warningbg btn-lg btn-block text-color4"
                      type="submit"
                    >
                      Change Password
                    </button>
                  </form>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Changepassword;

// // Find the UID claim

// const uidClaim = claims.find((claim) => claim.type === "UID");
// const uidValue = uidClaim.value;
