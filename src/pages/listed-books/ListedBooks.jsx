import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Books/Book";

const ListedBooks = () => {
  // worst case :
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedData = getStoredBook();
    const myReadList = data.filter((book) => storedData.includes(book.bookId));

    setReadList(myReadList);
  }, []);

  return (
    <div>
      <Tabs className="m-6">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold text-center">
            Books i read : {readList.length}
          </h2>
          <div className="flex flex-col justify-center items-center gap-9">
            {readList.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-[80vh] place-content-center text-center">
            <h2 className="font-bold text-2xl">No items to show currently</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
