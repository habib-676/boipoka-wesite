import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/listed-books/ListedBooks";
import BookDetails from "../pages/book-details/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/listedBooks",
        Component: ListedBooks,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
