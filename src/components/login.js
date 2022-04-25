import React, { useState, useEffect } from "react";

import axios from "axios";

function Login({ changeLoginState }) {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [welcomeCard, setWelcomeCard] = useState(false);
  const [password, setPassword] = useState("");
  const [currentUserDetails, setCurrentUserDetails] = useState(null);

  // Json

  useEffect(() => {
    axios
      .get("./db.json")
      .then((res) => {
        console.log(res.data, "msg");
       
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginUser = () => {
    
    if (userData === []) return;
    
    const filterUser = userData?.filter((res) => res.email === email);

    console.log(filterUser, userData, "filter user");
    
    if (filterUser[0]?.password === password) {
      setWelcomeCard(true);
      setCurrentUserDetails(filterUser);
    }
  };

  return (
    <>
      {!welcomeCard ? (
        <div>
          <h1>login </h1>
          <p> Email</p>
          <input onChange={(e) => setEmail(e.target.value)} />
          <p> password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              marginTop: "15px",
              width: "5rem",
              height: "2rem",
              backgroundColor: "blue",
              margin: "15px auto",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: "5px"
            }}
            onClick={() => loginUser()}
          >
            {" "}
            Login
          </div>
          <p>
            {" "}
            new user ? click here{" "}
            <span
              style={{ color: "pink", curser: "pointer" }}
              onClick={() => changeLoginState()}
            >
              Sign in{" "}
            </span>
          </p>
        </div>
      ) : (
        <>
          <h1>{`welcome ${currentUserDetails[0]?.email}`}</h1>
          <button onClick={() => setWelcomeCard(false)}>Logout</button>
        </>
      )}
    </>
  );
}

export default Login;
