import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../store/actions/productAction";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.productData);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Home;
