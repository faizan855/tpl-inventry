import React, { useState } from "react";
import "./Login.css";
import Logo1 from "../../../logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passwords, setPasswords] = useState("");

  const navigate = useNavigate();

  // const serverUrl = process.env.SERVER_URL;
  // console.log(serverUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://203.170.69.170:8070/api/account/login`,

        {
          username,
          passwords,
        }
      );
      // console.log(response);
      localStorage.setItem("Token", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch {
      alert("Missing or Invalid Login Details");
    }
  };

  return (
    <>
      <section className="vh-100 bg-orange">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-4 text-center">
                  <img src={Logo1} alt="" />
                  <h3 className="mb-5 text-color1">Welcome</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        id="typeEmailX-2"
                        type="text"
                        className="form-control form-control-lg"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <label
                        className="form-label text-color1"
                        htmlFor="typeEmailX-2"
                      >
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-3"
                        className="form-control form-control-lg"
                        onChange={(e) => setPasswords(e.target.value)}
                        required
                      />
                      <label
                        className="form-label text-color1"
                        htmlFor="typePasswordX-3"
                      >
                        Password
                      </label>
                    </div>

                    {/* <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label
                      className="form-check-label text-color1"
                      htmlFor="form1Example3"
                    >
                      {" "}
                      Remember password{" "}
                    </label>
                  </div> */}

                    <button
                      className="btn btn-warning btn-lg btn-block text-color2"
                      type="submit"
                    >
                      Login
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

export default Login;
