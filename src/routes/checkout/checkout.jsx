import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
