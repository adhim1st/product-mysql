import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../store/actions/productAction";

const CreateProduct = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(createProduct(data));
    history.push("/home");
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased flex flex-col justify-center">
      <div className="relative sm:w-96 sm:mx-auto text-center">
        <span className="text-2xl font-light font-poppin">
          Create new product
        </span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 py-6 font-roboto"
          >
            <label htmlFor="title" className="block font-semibold">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              ref={register({
                required: "Title required",
              })}
              className="border w-full h-5 px-3 py-5 mt-2 placeho hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.title && (
              <p className="px-2 pt-2 text-red-500 text-sm">
                {errors.title.message}
              </p>
            )}
            <label htmlFor="img_url" className="block font-semibold pt-5">
              Image Url
            </label>
            <input
              name="img_url"
              type="text"
              placeholder="Image Url"
              ref={register({ required: "Image Url required" })}
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.img_url && (
              <p className="px-2 pt-2 text-red-500 text-sm">
                {errors.img_url.message}
              </p>
            )}
            <label htmlFor="quantity" className="block font-semibold pt-5">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              ref={register({
                required: "Quantity required",
                min: { value: 1, message: "Minimum quantity is 1" },
              })}
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.quantity && (
              <p className="px-2 pt-2 text-red-500 text-sm">
                {errors.quantity.message}
              </p>
            )}
            <div className="mt-2 flex justify-end items-baseline">
              <button className="mt-4 bg-indigo-400 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
