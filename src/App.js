import React, { useState} from "react";
// importx
import Login from "./components/login";
import Signup from "./components/signup";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin, "islogin");
  return (
    <div style={{ textAlign: "center" }}>
      {!isLogin ? (
        <Login
          changeLoginState={() => {
            setIsLogin((bool) => !bool);
          }}
        />
      ) : (
        <Signup
          changeLoginState={() => {
            setIsLogin((bool) => !bool);
          }}
        />
      )}
    </div>
  );
}

