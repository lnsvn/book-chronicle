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
      <footer className="font-ws bg-tan p-8 flex flex-col text-charcoal">
        <div className="flex">
          <h1 className="text-xl mr-2">Book Chronicle</h1>
          <FaBookOpen className="h-6 w-6" />
        </div>
        <ul className="flex justify-evenly justify-start">{navData}</ul>
      </footer>
    </div>
  );
}

export default Footer;
