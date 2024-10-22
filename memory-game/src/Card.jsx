import { useState } from "react";

function Card({ cardContent, cardNumber, onSelection }) {
  const [selectedCard, setSelectedCard] = useState(false);

  const handleClick = (element) => {
    selectedCard === false ? setSelectedCard(true) : setSelectedCard(false);
    console.log(element);
  };

  return (
    <>
      <div
        className={selectedCard === true ? "card-active" : "card"}
        key={cardNumber}
        onClick={() => {
          handleClick(cardContent);
          selectedCard === false && onSelection();
        }}
      >
        {cardContent}
      </div>
    </>
  );
}

export default Card;
