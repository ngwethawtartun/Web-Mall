import React from 'react'
import Hero from "../components/Hero";
import Discounttime from "../components/Discounttime";
import DiscountItem from "../components/DiscountItem";
import Footer from "../components/Footer";
import Review from "../components/Review";
const hoursMinSecs = { hours: 100, minutes: 40, seconds: 40 };
const Home = () => {
  return (
    <>
      <div className="nav-color">
        
      </div>
      <Hero />
      <div className="hero-section">
        <Discounttime hoursMinSecs={hoursMinSecs} />

        <DiscountItem />
        <Review />
      </div>

     

      <Footer />
    </>
  );
}

export default Home