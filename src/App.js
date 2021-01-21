import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🦘": "Kangaroo",
  "🐧": "penguin",
  "🐵": "monkey",
  "🦝": "racoon",
  "🐇": "rabbit",
  "🦒": "giraffe",
  "🐘": "elephant",
  "🐐": "goat"
};

var emojisweKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emoticonsInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Fun with animals</h1>
      <input onChange={emoticonsInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
