import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, setCurrentUser } from "../redux/userdetails";

function Practice({ changeLoginState }) {
  const userData = useSelector((state) => state.gallery.photos);
  const currentUser = useSelector((state) => state.gallery.currentUser);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(getPhotos());
  });

  const loginUser = () => {
    // ! if userdata coming from is empty then no need to check return
    if (userData === []) return;
    // ! check if email is matcing with db if yes get that details
    const filterUser = userData?.filter((res) => res.email === email);
    // console.log(filterUser, userData, "filter user");
    // ! if password
    if (filterUser[0]?.password === password) {
      console.log(filterUser, "current user ");
      dispatch(setCurrentUser(filterUser));
    }
  };

  return (
    <>
      {currentUser.length === 0 ? (
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
          <h1>{`welcome ${currentUser[0]?.email}`}</h1>
          <button
            onClick={() => {
              dispatch(setCurrentUser([]));
            }}
          >
            Logout
          </button>
        </>
      )}
      
    </>
  );
}

export default Practice;
