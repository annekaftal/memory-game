import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function getRandomInt(n) {
  let randomInt = Math.floor(Math.random() * n);
  return randomInt;
}

function createDeck() {
  const emojis = ["🍎", "🥝", "🍒", "🍑", "🍋", "🍓"];
  const newDeck = [];
  for (let i = 0; i < emojis.length; i++) {
    newDeck.push(emojis[i], emojis[i]);
  }
  return newDeck;
}

function shuffle(oldDeck) {
  let newDeck = [];
  let numberOfCards = oldDeck.length;
  while (newDeck.length < numberOfCards) {
    let randomNumber = getRandomInt(oldDeck.length);
    newDeck.push(oldDeck[randomNumber]);
    oldDeck.splice(randomNumber, 1);
  }
  return newDeck;
}

let deck = createDeck();
deck = shuffle(deck);

function App() {
  return (
    <>
      <div className="card-deck">
        {deck.map((card, index) => (
          <Card cardContent={card} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
