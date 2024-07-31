import React, { useState } from "react";
import { useGetBooksQuery } from "../features/api/apiSlice";
import SingleBook from "./SingleBook";
import Success from "./ui/Success";
import { useSearchParams } from "react-router-dom";

const Booklist = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term") || "";
  const {
    data: books,
    isError,
    isLoading,
  } = useGetBooksQuery({ term: searchTerm });

  const filterByStatus = (book) => {
    if (filterStatus === "featured") {
      return book.featured;
    } else {
      return true;
    }
  };

  const handleStatusChange = (status) => {
    setFilterStatus(status);
  };

  let content = null;
  if (!isLoading && !isError && books?.length >= 0)
    content = books
      .filter(filterByStatus)
      .map((book, index) => <SingleBook book={book} key={index} />);

  return (
    <main className="py-12 px-6 2xl:px-6 container mx-auto">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleStatusChange("all")}
              className={`akon-filter-btn ${
                filterStatus === "all" ? "active-filter" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleStatusChange("featured")}
              className={`akon-filter-btn ${
                filterStatus === "featured" ? "active-filter" : ""
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0  gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          {isLoading && <h3>Loading...</h3>}
          {isError && <Success message="There was an error" />}
          {content}
        </div>
      </div>
    </main>
  );
};
export default Booklist;
