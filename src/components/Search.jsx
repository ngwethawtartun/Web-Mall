import React from "react";
import { useState } from "react";
import { Data } from "../data/db";

function Search() {
  const [search, setSearch] = useState("Data");

  return (
    <div className="container mx-auto mt-6">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search here...."
        onChange={(e) => setSearch(e.target.value)}
      />

      {Data.filter((product) => {
        if (search == "") {
          return product;
        } else if (
          product.title.toLowerCase().includes(search.toLowerCase())
        ) {
          return product;
        }
      }).map((product ) => {
        return (
          <div className="flex flex-wrap justify-center mt-5 ">
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 ">
              <figure className="max-h-80 ">
                <img src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title truncate">
                  {product.title}
                  {""}
                </h2>
                <p className="max-h-24 text-clip overflow-hidden">
                  {product.description}
                </p>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
