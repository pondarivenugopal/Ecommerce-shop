import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/products/Peoducts";
import Banner from "./components/banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/top-products/TopProducts";
import Testimonials from "./components/testimonial/Testimonial";
import Footer from "./components/fotter/Fotter.jsx";

// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./components/pages/Loginpage.jsx";
import SignupPage from "./components/pages/Signuppage.jsx";
import Cartpage from "./components/pages/Cartpage.jsx";
import { CartProvider } from "../CartContext.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Products />
                <Banner />
                <TopProducts />
                <Testimonials />
              </div>
            }
          />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
