import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
  const [selectedCard, setSelectedCard] = useState(-1);

  const handleClick = (element, number) => {
    setSelectedCard(number);
    console.log(element);
    console.log(number);
  };

  return (
    <>
      <div className="card-deck">
        {deck.map((card, index) => (
          <div
            className={selectedCard === index ? "card-active" : "card"}
            key={index}
            onClick={() => {
              handleClick(card, index);
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
