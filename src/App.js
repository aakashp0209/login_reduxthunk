import React, { useState } from "react";
// importx
import Practice from "./components/practice";
import Signup from "./components/signup";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin, "islogin");
  return (
    <div style={{ textAlign: "center" }}>
      {!isLogin ? (
        <Practice
          changeLoginState={() => {
            setIsLogin((bool) => !bool);
          }}
        />
      ) : (
        <Signup
          changeLoginState={() => {
            console.log("trigger");
            setIsLogin((bool) => !bool);
          }}
        />
      )}
    </div>
  );
}
