import React, { useState, useEffect } from "react";
// import { json } from "react-router";
import { useNavigate } from "react-router";

import "./Form.css";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let arrData = data.results;
        console.log(arrData);
        setUser(arrData);
      });
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
     <h1>Welcome Guest</h1>
      <div className="row">
        <button onClick={handleLogout}>Logout</button>
        {user.map((e) => (
          <div className="col-md-6 my-4" key={e.email.value}>
            <div className="card">
              <div className="card-body">
                <div className="img-box">
                  <img src={e.picture.large}  alt="" />
                </div>
                <h5 className="card-title">
                  {e.name.first + " " + e.name.last}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
