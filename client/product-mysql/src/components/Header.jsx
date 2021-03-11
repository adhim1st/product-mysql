import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Header() {
  const [login, setLogin] = useState(false);
  const location = useLocation().pathname;
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    history.push("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);
    }
  }, []);

  return (
    <nav className="flex justify-between items-center h-16 relative shadow-sm font-poppin text-indigo-700 sm:text-sm md:text-base lg:text-xl">
      <Link to="/home">
        <p to="/" className="pl-8">
          LOGO
        </p>
      </Link>
      <div className="flex flex-row justify-between items-center">
        {(location === "/home" ||
          location === "/create-product" ||
          location === "/update-product") && (
          <Link
            to="/create-product"
            className=" p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
          >
            <p>Create Product</p>
          </Link>
        )}
        {login && (
          <button
            onClick={handleLogout}
            className="p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
          >
            <p>Logout</p>
          </button>
        )}
        {location === "/register" && (
          <Link
            to="/login"
            className=" p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
          >
            <p>Login</p>
          </Link>
        )}
        {location === "/login" && (
          <Link
            to="/register"
            className=" p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
          >
            <p>Register</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
