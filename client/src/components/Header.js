import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../constants/nav";
import { FaBookOpen } from "react-icons/fa6";

function Header() {
  const navData = navLinks.map((nav) => {
    return (
      <li key={nav.title}>
        <NavLink to={nav.path} className="hover:underline">
          {nav.title}
        </NavLink>
      </li>
    );
  });

  return (
    <div>
      <header className="p-5 bg-chestnut-800 font-ws font-bold text-tan">
        <div className="flex justify-center items-center mb-2">
          <h1 className="mr-3 text-5xl">Book Chronicle</h1>
          <FaBookOpen className="h-14 w-14" />
        </div>
        <ul className="flex justify-evenly">
          {navData}
          <li className="hover:underline">Logout</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
