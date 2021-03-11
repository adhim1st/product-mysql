import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-md overflow-hidden m-3">
      <img
        className="object-contain md:object-scale-down h-50 w-full"
        src={product.img_url}
      />
      <div className="p-5 flex flex-col">
        <h1 className="font-semibold text-gray-600 text-lg font-roboto uppercase tracking-wide">
          {product.title}
        </h1>
        <p className="font-medium text-gray-400 mt-4">
          Stock left : {product.quantity}
        </p>
        <div className="flex flex-row justify-end mb-4">
          <Link to={{ pathname: `/update-product/${product.id}` }}>
            <button className=" mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
