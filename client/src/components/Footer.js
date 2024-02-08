import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../constants/nav";
import { FaBookOpen } from "react-icons/fa6";

function Footer() {
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
      <footer className="flex flex-col p-8 bg-tan font-ws text-charcoal">
        <div className="flex">
          <h1 className="mr-2 text-xl">Book Chronicle</h1>
          <FaBookOpen className="h-6 w-6" />
        </div>
        <ul className="flex justify-evenly">{navData}</ul>
      </footer>
    </div>
  );
}

export default Footer;
