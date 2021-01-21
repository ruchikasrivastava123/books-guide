import React from "react";
import "./styles.css";
import { useState } from "react";
const books = {
  Motivational: [
    { name: "The Power", author: "Rhonda Byrne" },
    { name: "Think and Grow Rich", author: "Napolean Hill" }
  ],

  Romantic: [
    {
      name: "I too had a love story",
      author: "Ravinder Singh"
    },
    {
      name: "Revolution 2020",
      author: "Chetan Bhagat"
    }
  ],
  Fiction: [
    {
      name: "The Alchemist",
      author: "Paulo Coehlo"
    },
    {
      name: "The Kite Runner",
      author: "Khalid Hosseini"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Motivational");
  function ClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 Books Guide </h1>
      <h3>Check out my favourite books!!</h3>
      <div>
        {Object.keys(books).map((genre) => (
          <button class="bt" onClick={() => ClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedGenre].map((book) => (
            <li key={book.name} class="li">
              <div style={{ fontSize: "larger" }}>{book.name} </div>
              <div style={{ fontSize: "smaller" }}>{book.author} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
