import React from "react";
import search from "../images/search.jpeg";
import journal from "../images/journal.jpeg";

function Home() {
  return (
    <div>
      <body className="bg-tan flex flex-col items-center">
        <div class="relative flex max-w-2xl rounded overflow-hidden shadow-lg m-8">
          <img src={search}></img>
          <div className="absolute text-5xl text-charcoal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex bg-tan rounded p-2">
            Search
          </div>
        </div>
        <div class="relative flex max-w-2xl rounded overflow-hidden shadow-lg m-8">
          <img src={journal}></img>
          <div className="absolute text-5xl text-tan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex bg-charcoal rounded p-2">
            Journal
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
