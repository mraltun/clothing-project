import React from "react";
import { CartItemContainer, ItemDetails, ItemName } from "./cart-item.style";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
