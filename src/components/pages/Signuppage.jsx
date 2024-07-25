import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/shoppinglogo.png";
import bgimg from "../../assets/ecommerces-login.avif";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";

// Define validation schema using Yup
const signupSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must be at most 15 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-no-repeat mb-20"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div
        data-aos="zoom-in-down"
        className="w-full max-w-md p-8 space-y-8 bg-black/50 shadow-lg rounded-lg mt-20"
      >
        <div data-aos="fade-up" className="flex justify-center">
          <img className="w-12 h-12 " src={logo} alt="Logo" />
        </div>
        <div className="signup-form">
          <h2 className="text-2xl font-bold text-center text-white">Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div data-aos="flip-right" className="mb-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white/60"
              >
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  id="username"
                  {...register("username")}
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-3 text-pink-600">
                  <FaUser />
                </span>
              </div>
              {errors.username && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div
              data-aos="flip-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mb-3 "
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/60"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  id="email"
                  {...register("email")}
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-3 text-pink-600">
                  <FaEnvelope />
                </span>
              </div>
              {errors.email && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="mb-3"
            >
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
                  required
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
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="mb-3"
            >
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white/60"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-pink-600 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <div className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <button 
              type="submit"
              className="w-full py-2 text-white bg-pink-400 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <div className="flex justify-center items-center mt-4 text-sm">
              <p className="mr-2 text-white font-bold">
                Already have an account?
              </p>
              <a
                href="/login"
                className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600"
              >
                Login Here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
