import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const allBooks = useLoaderData();
  const bookId = parseInt(id);

  const singleBook = allBooks.find((book) => book.bookId === bookId);

  const { bookName, image, review } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className="card card-side bg-base-100 shadow-2xl my-10">
      <figure className="max-w-sm p-14 ">
        <img src={image} alt={bookName} className="shadow-2xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-5xl font-semibold">{bookName}</h2>
        <p>{review}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-neutral"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Mark as Read
          </button>
          <button className="btn btn-info text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
