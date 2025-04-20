import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  const { bookName, author, image, category } = singleBook;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className=" py-10 bg-gray-200 ">
        <img src={image} alt={bookName} className="h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge">
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
