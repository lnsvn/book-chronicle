import React from "react";
import homeLinks from "../constants/home";

function HomeLinks() {
  const homeData = homeLinks.map((link) => {
    return (
      <a
        key={link.title}
        className="relative max-w-2xl m-8 rounded overflow-hidden shadow-2xl hover:opacity-85"
        href={link.href}
      >
        <img src={link.image} alt="home-link"></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-ws font-bold">
          <div className={link.titleClass}>{link.title}</div>
        </div>
      </a>
    );
  });

  return <>{homeData}</>;
}

export default HomeLinks;
