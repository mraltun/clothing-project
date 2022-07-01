import { useContext } from "react";
import { CategoriesContext } from "../../context/categories";
import ProductCard from "../../components/product-card/product-card";
import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Shop;
