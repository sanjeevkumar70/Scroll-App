import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
      navigate("/home");
    }
  

  return (
    <div className="form-box">
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
