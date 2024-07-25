import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "../../assets/shoppinglogo.png";
import bg from "../../assets/loginpage.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

// Define validation schema using Yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must be at most 15 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Simulate form submission
    console.log("Form data:", data);
    reset();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover  bg-no-repeat h-96 mb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        data-aos="flip-left"
        className="w-full max-w-md p-8 space-y-8 bg-black/50 shadow-lg rounded-lg"
      >
        <div data-aos="flip-up" className="flex justify-center">
          <img className="w-16 h-16" src={logo} alt="Logo" />
        </div>
        <h2
          data-aos="flip-up"
          data-aos-duration="1000"
          className="text-2xl font-bold text-center text-white"
        >
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div data-aos="flip-right">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/60"
            >
              Email address
            </label>
            <input
              type="email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <div className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </div>
            )}
          </div>
          <div data-aos="flip-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/60"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                id="password"
                {...register("password")}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center px-3 text-pink-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <div className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-pink-400 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className="flex justify-center items-center mt-4 text-sm">
            <p className="mr-2 text-white font-bold">Don't have an account?</p>
            <div>
              <Link to="/signup">
                <button className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600">
                  Signup Here
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
