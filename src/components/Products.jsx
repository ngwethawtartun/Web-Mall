import React from "react";
import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //console.log(products);

  return (
    <div className="flex flex-wrap gap-10 justify-center mt-8 ">
      {products.map((product) => (
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-80">
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
      ))}
    </div>
  );
}

export default Products;
