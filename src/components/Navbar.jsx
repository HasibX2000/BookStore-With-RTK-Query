import React from "react";
import AkonsLogo from "../assets/logo.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const styleAdd = location.pathname === "/add" ? "font-semibold" : "";
  const styleStore = location.pathname === "/" ? "font-semibold" : "";

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("term") || "";

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchParams({ term: searchValue });
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={AkonsLogo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`cursor-pointer ${styleStore}`}
            id="akon-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            to="/add"
            className={`cursor-pointer ${styleAdd}`}
            id="akon-addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search focus:outline-none border p-2 rounded-md"
              id="akon-search"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
