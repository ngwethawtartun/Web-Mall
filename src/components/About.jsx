import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <>
      <div
        className="hero h-96 "
        style={{ backgroundImage: `url("src/images/book.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Read Free Library Books and Download Free.
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 h-56">
        <h2 className="text-2xl font-bold text-orange-700 ">Our Mission</h2>
        <p className="mt-3 text-lg font-semibold text-stone-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Atque at autem veniam fugiat quos rerum ratione
          <br /> accusantium! Fugit molestias amet autem eligendi <br />
          atque quam optio nulla possimus voluptatem, <br />
          ut ratione.
        </p>
      </div>
      <h1 className="text-center">Project Members</h1>
      <div className="container mx-auto flex flex-wrap gap-10 justify-center mt-8 leading-8 ">
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Hlaing Htet</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Wendy</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Mya Pwint</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Aung Khant Soe</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Min Htet Aung</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
        <div className="card  bg-base-100 shadow-xl text-center hover:scale-105">
          <figure className="px-10 pt-10">
            <img src="src/images/member.jpg" className=" rounded-xl h-64 " />
          </figure>
          <p className="mt-3">Ngwe Thawtar Tun</p>
          <span className="mb-3">nwaynway288781@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default About;
