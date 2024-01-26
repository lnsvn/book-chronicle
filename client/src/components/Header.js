import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../constants/nav";
import { FaBookOpen } from "react-icons/fa6";

function Header() {
    const navData = navLinks.map((nav) => {
        return (
            <li>
                <NavLink to={nav.path} className="hover:underline">{nav.title}</NavLink>
            </li>
        )
    })

    return (
        <div>
            <header className="p-5 font-bold text-center bg-chestnut-800 text-tan">
                <div className="flex justify-center items-center">
                    <h1 className="font-js text-5xl mr-3">Book Chronicle</h1>
                    <FaBookOpen className="h-14 w-14" />
                </div>
                <ul className="flex justify-evenly">
                    {navData}
                    <li className="hover:underline">Logout</li>
                </ul>
            </header>
        </div>
    )
}

export default Header