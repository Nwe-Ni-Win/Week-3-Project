import React, { useContext } from "react";
import { itemContext } from "../store/itemContext";

const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(itemContext);
  const addAmountHandle = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandle = () => {
    removeItem(fruit.id);
  };
  return (
    <div className="card cart">
      <div>
        <p className="card-title">{fruit.name}</p>
        <p className="card-price">$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <p className="card-quantity">
          x<span>{fruit.amount}</span>
        </p>
        <div className="quantity-ctr">
          <button className="quantity-btn m-ctr" onClick={addAmountHandle}>
            +
          </button>
          <button className="quantity-btn" onClick={removeAmountHandle}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
