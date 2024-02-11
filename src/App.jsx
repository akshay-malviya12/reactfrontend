import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Addproduct from "./components/Addproduct";
import Productlist from "./components/Productlist";
import Updateproduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      {/* <h1>React App is ready to start works</h1> */}

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          {/* <Route element={<PrivateComponenet/>}> */}
          <Route path="/" element={<Productlist />}></Route>
          <Route path="/add" element={<Addproduct />}></Route>
          <Route path="/update" element={<Updateproduct />}></Route>
          <Route path="/logout" element={<h1>Logout componant</h1>}></Route>
          <Route path="/profile" element={<h1>Profile componant</h1>}></Route>
          {/* </Route> */}

          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
