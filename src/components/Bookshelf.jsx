import React from "react";
import { useState } from "react";

const Bookshelf = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [newBook, setNewBook] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewBook((prevBooks) => [
      ...prevBooks,
      { title: inputTitle, author: inputAuthor },
    ]);

    setInputTitle("");
    setInputAuthor("");
  };

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setInputAuthor(event.target.value);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <div className="Form">
          <div>
            <label className="input">Title:</label>
            <input
              type="text"
              placeholder="enter title"
              onChange={handleTitleChange}
              value={inputTitle}
            />
          </div>
          <div>
            <label className="input">Author:</label>
            <input
              type="text"
              placeholder="enter author"
              onChange={handleAuthorChange}
              value={inputAuthor}
            />
          </div>
        </div>

        <button className="button" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
      <div className="bookCardsDiv">
        {newBook.map((book) => (
          <div className="bookCard">
            <>
              <label id="title1">{book.title}</label>
              <label id="author1">{book.author}</label>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
