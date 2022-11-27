import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero"
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
//import Search from "./components/Search";
//import allProducts from "./db.json"
//import { useState } from "react";

function App() {
  return (
    <>
      <div className="nav-color">
        <nav className="container navbar mx-auto">
          <div className="flex-1">
            <a className=" text-color text-xl">WEB MALL</a>
          </div>
          <ul className="flex gap-6 text-blue-500">
            <Link to="/">Home</Link>
            <Link to="Allproducts">Allproducts</Link>
          </ul>

          <div className="flex-none gap-8">
            <div className="cart-color indicator ml-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div></div>
            <div className="flex-1">
              <a className="btn  normal-case text-xl">Log in</a>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="hero h-96   "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/8938734/pexels-photo-8938734.jpeg?cs=srgb&dl=pexels-leeloo-thefirst-8938734.jpg&fm=jpg&_gl=1*11fdvy9*_ga*MTQ0ODY1MTAxMC4xNjYxMTQ3NjIz*_ga_8JE65Q40S6*MTY2ODUyNTE0OC45LjEuMTY2ODUyNzA1NS4wLjAuMA..")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <Hero />
        </div>
        <button className="btn btn-primary mt-52">
         
          <Link to="Allproducts">Buy Now</Link>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
