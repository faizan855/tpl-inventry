import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import Logo1 from "../../logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ setContentsend }) => {
  const location = useLocation();

  /* ///////////////Navigate to Lofin page/////////////// */
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear("Token");
    navigate("/");
  };

  /* ///////////////Hide Unhide Menu/////////////// */

  const [sidebar, setSidebar] = useState("sidebar");

  /* //Hide Sidbar Conditionally// */

  // Use With HashRouter
  useEffect(() => {
    const currentURL = location.pathname;
    if (
      currentURL === "/dashboard/MRN-List" ||
      currentURL === "/dashboard/MRN-List/civil" ||
      currentURL === "/dashboard/MRN-List/electrical" ||
      currentURL === "/dashboard/MRN-List/mechanical" ||
      currentURL === "/dashboard/MRN-List/technical" ||
      currentURL === "/dashboard/WHIGPS-List"
    ) {
      setSidebar("sidebarjs");
      setContentsend("main-contentjs");
    } else {
      setSidebar("sidebar");
      setContentsend("main-content");
    }
  }, [location.pathname, setContentsend]);

  // Use With BrowserRouter

  // useEffect(() => {
  //   const handleNavigation = () => {
  //     const currentURL = window.location.pathname;
  //     if (
  //       currentURL === "/dashboard/MRN-List" ||
  //       currentURL === "/dashboard/MRN-List/civil" ||
  //       currentURL === "/dashboard/MRN-List/electrical" ||
  //       currentURL === "/dashboard/MRN-List/mechanical" ||
  //       currentURL === "/dashboard/MRN-List/technical" ||
  //       currentURL === "/dashboard/WHIGPS-List"
  //     ) {
  //       setSidebar("sidebarjs");
  //       setContentsend("main-contentjs");
  //     } else {
  //       setSidebar("sidebar");
  //       setContentsend("main-content");
  //     }
  //   };

  //   handleNavigation();
  // }, [setContentsend]);

  const handleClick2 = () => {
    setSidebar((prevIconClass) =>
      prevIconClass === "sidebar" ? "sidebarjs" : "sidebar"
    );
    setContentsend((prevIconClass) =>
      prevIconClass === "main-content" ? "main-contentjs" : "main-content"
    );
  };

  /* ///////////////Changing Arrow in Menu/////////////// */
  const [iconClass1, setIconClass1] = useState("fa-solid fa-caret-right");
  const [iconClass2, setIconClass2] = useState("fa-solid fa-caret-right");
  const [iconClass3, setIconClass3] = useState("fa-solid fa-caret-right");
  const [iconClass4, setIconClass4] = useState("fa-solid fa-caret-right");
  const [iconClass5, setIconClass5] = useState("fa-solid fa-caret-right");

  const handleClick3 = (dropdown) => {
    if (dropdown === 1) {
      setIconClass1((prevIconClass) =>
        prevIconClass === "fa-solid fa-caret-right"
          ? "fa-solid fa-caret-down"
          : "fa-solid fa-caret-right"
      );
    }
    if (dropdown === 2) {
      setIconClass2((prevIconClass) =>
        prevIconClass === "fa-solid fa-caret-right"
          ? "fa-solid fa-caret-down"
          : "fa-solid fa-caret-right"
      );
    }
    if (dropdown === 3) {
      setIconClass3((prevIconClass) =>
        prevIconClass === "fa-solid fa-caret-right"
          ? "fa-solid fa-caret-down"
          : "fa-solid fa-caret-right"
      );
    }
    if (dropdown === 4) {
      setIconClass4((prevIconClass) =>
        prevIconClass === "fa-solid fa-caret-right"
          ? "fa-solid fa-caret-down"
          : "fa-solid fa-caret-right"
      );
    }
    if (dropdown === 5) {
      setIconClass5((prevIconClass) =>
        prevIconClass === "fa-solid fa-caret-right"
          ? "fa-solid fa-caret-down"
          : "fa-solid fa-caret-right"
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-orange navbar-expand-sm flex-md-nowrap p-2 shadow">
        <div className="container-fluid">
          <button
            className="fa-solid fa-bars menu1-btn"
            style={{ color: "white" }}
            onClick={handleClick2}
          />
          <img src={Logo1} alt="Logo" className="nav-logo" />
          <Link className="navbar-brand" to="/">
            Tower Power
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <div className="icon-decoration">
              <Link className="fa-solid fa-house text-light " to="/" />
            </div>
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inventory
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Link
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another link
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      A third link
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Calculator
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
            <div className="nav-div2 ">
              <div>
                <Link className="mb-0 link-decoration mx-5" to="/">
                  Overview
                </Link>
              </div>

              {/* <div style={{ marginRight: "7%", cursor: "pointer" }}>
                <Link
                  className="fa-solid fa-bell"
                  style={{ color: "white" }}
                  to="/"
                />
              </div> */}
              <div style={{ marginRight: "2%", cursor: "pointer" }}>
                <Link
                  className=" fa-solid fa-user"
                  style={{ color: "white" }}
                  to="/"
                />
              </div>
              <div className="user-name mb-0">
                <p className="mb-0" style={{ fontFamily: "cursive" }}>
                  Faizan Ahmad
                </p>
              </div>
            </div>

            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <Link onClick={handleClick} className="nav-link active" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={sidebar}>
        <div className="sidebar-header">
          <h5>Welcome</h5>
        </div>
        {/* //////////////////////////////////FIRST SECTION////////////////////////////////// */}
        <div
          className="menudiv1-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo1"
          onClick={() => handleClick3(1)}
        >
          <i style={{ marginRight: "15px" }} className="fa-solid fa-bars" />
          <p className="mb-0">Dashboard</p>
          <i
            className={iconClass1}
            style={{
              position: "absolute",
              top: "50%",
              right: "20%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <div className="menudiv1-maindropdown collapse" id="demo1">
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/dashboard/profile">
              My Profile
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/dashboard/change-password">
              Change Password
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Setting
            </Link>
          </div>
        </div>

        <div
          className="menudiv1-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo2"
          onClick={() => handleClick3(2)}
        >
          <i style={{ marginRight: "15px" }} className="fa-solid fa-globe" />
          <p className="mb-0">Facilitations </p>
          <i
            className={iconClass2}
            style={{
              position: "absolute",
              top: "50%",
              right: "20%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <div className="menudiv1-maindropdown collapse" id="demo2">
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Employee Portal
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Leaves
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Outdoor Duties
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Salary
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Attendance
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Loan
            </Link>
          </div>
        </div>

        <div
          style={{
            paddingBottom: "35px",
            borderBottom: "solid 1px rgb(232, 232, 232)",
          }}
        ></div>
        {/* //////////////////////////////////SECOND SECTION////////////////////////////////// */}

        <div
          className="menudiv1-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo3"
          onClick={() => handleClick3(3)}
        >
          <i style={{ marginRight: "15px" }} className="fa-solid fa-bars" />
          <p className="mb-0">Demands</p>
          <i
            className={iconClass3}
            style={{
              position: "absolute",
              top: "50%",
              right: "20%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <div className="menudiv1-maindropdown collapse" id="demo3">
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Demands List
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Create Demand
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Setting
            </Link>
          </div>
        </div>

        <div
          className="menudiv1-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo4"
          onClick={() => handleClick3(4)}
        >
          <i style={{ marginRight: "15px" }} className="fa-solid fa-bars" />
          <p className="mb-0">MRN's</p>
          <i
            className={iconClass4}
            style={{
              position: "absolute",
              top: "50%",
              right: "20%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <div className="menudiv1-maindropdown collapse" id="demo4">
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/dashboard/MRN-List">
              MRN List
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Add MRN
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              MRN Return
            </Link>
          </div>
        </div>

        <div
          className="menudiv1-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#demo5"
          onClick={() => handleClick3(5)}
        >
          <i style={{ marginRight: "15px" }} className="fa-solid fa-globe" />
          <p className="mb-0">Our Sites</p>
          <i
            className={iconClass5}
            style={{
              position: "absolute",
              top: "50%",
              right: "20%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <div className="menudiv1-maindropdown collapse" id="demo5">
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Sites List
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Inventory
            </Link>
          </div>
          <div className="menudiv1-dropdown">
            <Link className="link-decoration" to="/">
              Load Calculator
            </Link>
          </div>
        </div>

        <div
          style={{
            paddingBottom: "35px",
            borderBottom: "solid 1px rgb(232, 232, 232)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
