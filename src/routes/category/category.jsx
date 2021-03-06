import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../context/categories";
import { CategoryContainer, Title } from "./category.style";

const Category = () => {
  // Destruct category name from url (":category" from route)
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  // When category ("/hats/" in url) or categoriesMap changes, update the products state with products (categoriesMap[title] which is maps in this case)
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {/* products will be undefined because categoryMap is an empty object. It needs to fetch data so we need to add truthy */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
