import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loginvalidation = (props) => {
  const { Component } = props;
  const navigate = useNavigate();



  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("Token"));
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);
  
  return (
    <div>
      <Component />
    </div>
  );
};

export default Loginvalidation;
