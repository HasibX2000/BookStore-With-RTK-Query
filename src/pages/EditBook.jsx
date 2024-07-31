import React from "react";
import EditForm from "../components/EditForm";
import { useGetBookQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Error from "../components/ui/Error";

const EditBook = () => {
  const { bookId } = useParams();

  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  let content = null;
  if (isLoading) content = <h3>Loading...</h3>;
  if (!isLoading && isError)
    content = <Error message="There was an error getting book data" />;

  if (!isLoading && !isError && book?.id) content = <EditForm book={book} />;

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default EditBook;
