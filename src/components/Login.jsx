import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify(email, password),
      headers: {
        "Content-Type": "application-json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("users", Json.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));

      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        className="inputBox"
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button className="appButton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
