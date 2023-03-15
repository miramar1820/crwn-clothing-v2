import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(
    "🚀 ~ file: category.component.jsx:11 ~ Category ~ categoriesMap:",
    categoriesMap
  );
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    const list = categoriesMap[category];
    if (list) {
      setProducts(list);
    }
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="categories-title">{category}</h2>
      <div className="categories-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Category;
