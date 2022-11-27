import React from "react";

const DiscountItem = () => {
  return (
    <>
      <h1 className="container mx-auto text-center mt-20 text-5xl">
        Discount Item
      </h1>

      <div className="container mx-auto flex flex-wrap justify-center gap-10 mt-20 ">
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos sed fugit odit odio modi animi porro? Ratione,
              maxime perspiciatis.
            </p>
            <span>$200</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum omnis explicabo corrupti facere esse autem hic sunt assumenda, dicta reprehenderit!</p>
            <span>$360</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate voluptas officiis nam accusantium incidunt nihil,
              quibusdam similique repudiandae quaerat. Nisi.
            </p>
            <span>$300</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 4.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate voluptas officiis nam accusantium incidunt nihil,
              quibusdam similique repudiandae quaerat. Nisi.
            </p>
            <span>$250</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 5.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate voluptas officiis nam accusantium incidunt nihil,
              quibusdam similique repudiandae quaerat. Nisi.
            </p>
            <span>$450</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105">
          <figure className="max-h-64">
            <img src="src/images/one-set 6.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winner-clothes</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate voluptas officiis nam accusantium incidunt nihil,
              quibusdam similique repudiandae quaerat. Nisi.
            </p>
            <span>$300</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountItem;
