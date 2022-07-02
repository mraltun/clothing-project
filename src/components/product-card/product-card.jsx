import { useContext } from "react";

import { CartContext } from "../../context/cart";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.style";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  // Add as separate function for better readiblity and optimization
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
