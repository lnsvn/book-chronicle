import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../constants/nav";

function Header() {
    const navData = navLinks.map((nav) => {
        return (
            <li>
                <NavLink to={nav.path}>{nav.title}</NavLink>
            </li>
        )
    })

    return (
        <div>
            <header className="p-5 font-bold text-center bg-chestnut-800 text-tan">
                <h1 className="font-js text-5xl">Book Chronicle</h1>
                <ul className="">
                    {navData}
                </ul>
            </header>
        </div>
    )
}

export default Header