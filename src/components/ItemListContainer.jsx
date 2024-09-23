import { useState } from "react";
import CartWidget from "./CartWidget.jsx";
import "./ItemListContainer.css";

function ItemListContainer({greeting, message}) {
  const [count, setCount] = useState(0);

  return (
    <li className="item-list-container">
        <h1>{greeting}</h1>
        <h2>{message}</h2>
    </li>
  );
}

export default ItemListContainer;