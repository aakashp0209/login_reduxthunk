import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "../redux/counter";
// importx
import axios from "axios";

function Practice({ changeLoginState }) {
  const isLogged = useSelector((state) => state.counter.isLogged);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  // const [welcomeCard, setWelcomeCard] = useState(false);
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
    // ! if userdata coming from is empty then no need to check return
    if (userData === []) return;
    // ! check if email is matcing with db if yes get that details
    const filterUser = userData?.filter((res) => res.email === email);
    // console.log(filterUser, userData, "filter user");
    // ! if password
    if (filterUser[0]?.password === password) {
      dispatch(setUserState(true));
      setCurrentUserDetails(filterUser);
    }
  };

  return (
    <>
      {!isLogged ? (
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
          <button
            onClick={() => {
              dispatch(setUserState(false));
            }}
          >
            Logout
          </button>
        </>
      )}
      <p style={{ marginTop: "2rem" }}>
        hint: email: aakash.p@gmail.com , password: hello
      </p>
    </>
  );
}

export default Practice;
