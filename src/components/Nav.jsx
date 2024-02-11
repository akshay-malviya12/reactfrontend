import React from "react";
// import users from "../../../backend/db/users";
import { Link } from "react-router-dom";

const Nav = () => {
  // const navigate = useNavigate();
  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };
  return (
    <div>
      <img alt="logo" className="logo" src=""></img>
      {/* {auth ? ( */}
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">update Products</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>

        {/* <li>
          <Link onClick={logout} to="/signup">
            Logout {JSON.parse(auth).name}
          </Link>
        </li> */}
      </ul>
      {/* ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )} */}
    </div>
  );
};

export default Nav;
