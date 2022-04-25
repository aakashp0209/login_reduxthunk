import React, { useState } from "react";

function Signup({ changeLoginState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Sign up page </h1>
      <p> Email</p>
      <input onChange={(e) => setEmail(e.target.value)} />
      <p> password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <p> Confirm password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
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
      >
        {" "}
        Sign up
      </div>
      <p onClick={() => changeLoginState()}>
        Already user?
        <span style={{ color: "pink", curser: "pointer" }}>Log in</span>
      </p>
    </div>
  );
}

export default Signup;
