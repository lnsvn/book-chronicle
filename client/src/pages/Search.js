import React from "react";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <div>
      <main className="flex flex-col items-center pt-4 bg-tan font-ws">
        <form className="flex w-full max-w-96 justify-between mx-2 m-8 p-2 bg-white border border-charcoal rounded shadow-xl">
          <input
            className="py-1 px-2 bg-white text-charcoal appearance-none focus:outline-none"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          ></input>
          <button
            className="px-2 bg-chestnut-800 text-sm text-tan hover:bg-chestnut-600 border border-charcoal rounded"
            type="submit"
          >
            Search
          </button>
        </form>
      </main>
    </div>
  );
}

export default Search;
