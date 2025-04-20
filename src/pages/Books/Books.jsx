import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">Books</h3>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
