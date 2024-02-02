import React from "react";
import homeLinks from "../constants/home";

function HomeLinks() {
  const homeData = homeLinks.map((link) => {
    return (
      <a key={link.title}
        className="relative flex max-w-2xl rounded overflow-hidden shadow-2xl m-8 hover:opacity-85"
        href={link.href}
      >
        <img src={link.image}></img>
        <div className="absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex font-ws font-bold">
          <div className={link.titleClass}>{link.title}</div>
        </div>
      </a>
    );
  });

  return <>{homeData}</>;
}

export default HomeLinks;
