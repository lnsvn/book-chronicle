import React from "react";
import search from "../images/search.jpeg";
import journal from "../images/journal.jpeg";

function Home() {
  return (
    <div>
      <body className="bg-tan flex flex-col items-center">
        <a class="relative flex max-w-2xl rounded overflow-hidden shadow-2xl m-8 hover:opacity-85"
        href="/search">
          <img src={search}></img>
          <div className="absolute text-5xl text-charcoal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex bg-tan rounded p-2 font-ws font-bold">
            Search
          </div>
        </a>
        <a class="relative flex max-w-2xl rounded overflow-hidden shadow-2xl m-8 hover:opacity-85"
        href="/journal">
          <img src={journal}></img>
          <div className="absolute text-5xl text-tan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex bg-charcoal rounded p-2 font-ws font-bold">
            Journal
          </div>
        </a>
      </body>
    </div>
  );
}

export default Home;
