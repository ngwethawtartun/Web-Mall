import React from 'react'
import Products from "../components/Products";
import Footer from "../components/Footer"
import Search from '../components/Search';

const AllProducts = () => {
  return (
    <>
     <Search/>
      <Products />
      <Footer />
    </>
  );
}

export default AllProducts;