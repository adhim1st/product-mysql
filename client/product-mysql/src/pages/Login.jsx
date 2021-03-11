import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postLogin } from "../store/actions/productAction";
const Login = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(postLogin(data));
    history.push("/home");
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased flex flex-col justify-center">
      <div className="relative sm:w-96 sm:mx-auto text-center">
        <span className="text-2xl font-light font-poppin">
          Login to your account
        </span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 py-6 font-roboto"
          >
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              ref={register({
                required: "Email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="border w-full h-5 px-3 py-5 mt-2 placeho hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.email && (
              <p className="px-2 pt-2 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
            <label htmlFor="password" className="block font-semibold pt-5">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: "Password required" })}
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.password && (
              <p className="px-2 pt-2 text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
            <div className="mt-2 flex justify-between items-baseline">
              <button className="mt-4 bg-indigo-400 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
                Submit
              </button>
              <Link to="/register" className="text-sm hover:underline">
                Don't have an account yet?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
