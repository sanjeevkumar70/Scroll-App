import React from "react";
import { useNavigate } from "react-router";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="form-box">
      <form>
        <input type="text" placeholder="Username" /> <br /> <br />
        <input type="text" placeholder="Password" /> <br /> <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
