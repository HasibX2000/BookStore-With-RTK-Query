import React, { useState } from "react";
import { useEditBookMutation } from "../features/api/apiSlice";
import Success from "./ui/Success";
import Error from "./ui/Error";

const EditForm = ({ book }) => {
  const {
    id,
    name: pName,
    author: pAuthor,
    thumbnail: pThumbnail,
    price: pPrice,
    featured: pFeatured,
    rating: pRating,
  } = book;

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const [name, setName] = useState(pName);
  const [author, setAuthor] = useState(pAuthor);
  const [thumbnail, setThumbnail] = useState(pThumbnail);
  const [price, setPrice] = useState(pPrice);
  const [featured, setFeatured] = useState(pFeatured);
  const [rating, setRating] = useState(pRating);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price,
        featured,
        rating,
      },
    });
  };
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="akon-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="akon-bookName"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="akon-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="akon-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="akon-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="akon-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="akon-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="akon-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="akon-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="akon-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="akon-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
        />
        <label htmlFor="akon-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button
        type="submit"
        className="submit"
        id="akon-submit"
        disabled={isLoading}
      >
        Add Book
      </button>

      {isError && <Error message="There was an error editing the book" />}
      {isSuccess && <Success message="Book edited successfully" />}
    </form>
  );
};

export default EditForm;
