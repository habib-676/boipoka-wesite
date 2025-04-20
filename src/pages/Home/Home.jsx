import React from "react";
import bookImg from "../../assets/books.jpg";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* banner */}
      <div className="hero bg-base-200 p-16 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br />
              your bookshelf
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-green-700">
              View the list
            </button>
          </div>
        </div>
      </div>

      <Books data={data}></Books>
    </div>
  );
};

export default Home;
