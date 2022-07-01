import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {/* Get index of products from the array and list the first 4 of them as preview  */}
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
