import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-96   "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/8938734/pexels-photo-8938734.jpeg?cs=srgb&dl=pexels-leeloo-thefirst-8938734.jpg&fm=jpg&_gl=1*11fdvy9*_ga*MTQ0ODY1MTAxMC4xNjYxMTQ3NjIz*_ga_8JE65Q40S6*MTY2ODUyNTE0OC45LjEuMTY2ODUyNzA1NS4wLjAuMA..")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold">Shopping With Me</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
