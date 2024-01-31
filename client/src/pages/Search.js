import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Search() {
  return (
    <div>
      <main className="bg-tan font-ws pt-4 flex flex-col items-center">
        <form className="max-w-2xl mx-2 shadow-xl m-8 bg-white border flex border-charcoal rounded p-2">
          <div className="flex py-2">
            <input
              className="appearance-none bg-white w-full text-charcoal mr-3 py-1 px-2  focus:outline-none"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            ></input>
            <div className="relative w-56">
              <select className="appearance-none w-full bg-white border border-charcoal text-charcoal hover:border-gray-400 px-4 py-2 rounded shadow leading-tight focus:outline-none">
                <option>Title</option>
                <option>Author</option>
                <option>More</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-charcoal">
                <IoIosArrowDown />
              </div>
            </div>
            <button
              className="bg-chestnut-800 hover:bg-chestnut-600 
              border border-charcoal text-sm text-tan px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Search;
