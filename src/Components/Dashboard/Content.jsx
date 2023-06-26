import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Content = () => {
  /* ///////////////Hide Unhide Menu/////////////// */
  const [content, setContent] = useState("main-content");
  //////////////////////////////////Get Cards Data//////////////////////////////////

  const [data, setData] = useState({
    civil: "",
    electrical: "",
    empid: "",
    mechanical: "",
    technical: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("Token"));
        const key = token.token;

        const response = await axios.get(
          "http://203.170.69.170:8070/api/INVAPI/InventoryDB",
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const InventoryDB = response.data[0];

        setData({
          civil: InventoryDB.civil,
          electrical: InventoryDB.electrical,
          empid: InventoryDB.empid,
          mechanical: InventoryDB.mechanical,
          technical: InventoryDB.technical,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  //////////////////////////////////Get Cards Data//////////////////////////////////

  return (
    <>
      <Navbar setContentsend={setContent} />
      <div className={content}>
        <div className="container">
          {/* ////////First Row//////// */}
          <div className="row pt-3">
            {/* //////////////////////////////////First Card////////////////////////////////// */}
            <div className="col-lg-3 col-sm-12">
              <div className="card bg-c-blue order-card">
                <div className="card-block custom-Padding">
                  <h6 className="m-b-20 text-center">
                    Pending MRN
                    <br />
                    <span>From</span>
                    <br />
                    <span>Civil</span>
                  </h6>
                  <p className="text-center">{data.civil}</p>
                </div>

                <Link
                  type="button"
                  className="btn btn-secondary btn-sm btn-block custom-Margin"
                  to="/dashboard/MRN-List/civil"
                >
                  Details
                </Link>
              </div>
            </div>
            {/* //////////////////////////////////Second Card////////////////////////////////// */}

            <div className="col-lg-3 col-sm-12">
              <div className="card bg-c-green order-card">
                <div className="card-block custom-Padding">
                  <h6 className="m-b-20 text-center">
                    Pending MRN
                    <br />
                    <span>From</span>
                    <br />
                    <span>Electrical</span>
                  </h6>
                  <p className="text-center">{data.electrical}</p>
                </div>
                <Link
                  type="button"
                  className="btn btn-secondary btn-sm btn-block custom-Margin"
                  to="/dashboard/MRN-List/electrical"
                  
                >
                  Details
                </Link>
              </div>
            </div>
            {/* //////////////////////////////////Third Card////////////////////////////////// */}

            <div className="col-lg-3 col-sm-12">
              <div className="card bg-c-yellow order-card">
                <div className="card-block custom-Padding">
                  <h6 className="m-b-20 text-center">
                    Pending MRN
                    <br />
                    <span>From</span>
                    <br />
                    <span>Mechanical</span>
                  </h6>
                  <p className="text-center">{data.mechanical}</p>
                </div>
                <Link
                  type="button"
                  className="btn btn-secondary btn-sm btn-block custom-Margin"
                  to="/dashboard/MRN-List/mechanical"
                >
                  Details
                </Link>
              </div>
            </div>
            {/* //////////////////////////////////Forth Card////////////////////////////////// */}
            <div className="col-lg-3 col-sm-12">
              <div className="card bg-c-pink order-card">
                <div className="card-block custom-Padding">
                  <h6 className="m-b-20 text-center">
                    Pending MRN
                    <br />
                    <span>From</span>
                    <br />
                    <span>Technical</span>
                  </h6>
                  <p className="text-center">{data.technical}</p>
                </div>
                <Link
                  type="button"
                  className="btn btn-secondary btn-sm btn-block custom-Margin"
                  to="/dashboard/MRN-List/technical"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          {/* ////////Second Row//////// */}
          <div className="row pt-2">
            {/* //////////////////////////////////First Card////////////////////////////////// */}
            <div className="col-lg-3 col-sm-12">
              <div className="card bg-c-skyblue order-card">
                <div className="card-block custom-Padding">
                  <h6 className="m-b-20 text-center">
                  Site Wise Inward
                    {/* <br />
                    <span>From</span>
                    <br />
                    <span>Civil</span> */}
                  </h6>
                  <p className="text-center">{data.civil}</p>
                </div>

                <Link
                  type="button"
                  className="btn btn-secondary btn-sm btn-block custom-Margin"
                  // onClick={MRNhandleClick}
                  to="/dashboard/WHIGPS-List"
                >
                  Details
                </Link>
              </div>
            </div>
            {/* //////////////////////////////////Second Card////////////////////////////////// */}

            {/* //////////////////////////////////Third Card////////////////////////////////// */}

            {/* //////////////////////////////////Forth Card////////////////////////////////// */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
