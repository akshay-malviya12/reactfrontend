import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //this is a hook use for redirect for pages.
  const navigate = useNavigate();
  console.log("name", name);
  console.log("email", email);
  console.log("password", password);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("result");
    result = await result.json;
    console.log(result);
    localStorage.setItem("user".JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/"); //user page home product.
    }
  };

  return (
    <div className="regiser">
      <h1>Registers</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      ></input>
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      ></input>
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      ></input>
      <button onClick={collectData} className="appbutton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
