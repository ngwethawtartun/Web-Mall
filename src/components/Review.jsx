import React from "react";
import { useState, useEffect } from "react";
import View from "./Visible";
const Data= () => {
  const data = localStorage.getItem("reviews");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const Review = () => {
  const [reviews, setReviews] = useState(Data());

  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  

 
  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
    
    let Review = {
      name,
      description,
      
    };
    setReviews([...reviews, Review]);
    setName("");
    setDescription("");
   
  };

 
  const deleteReview = (name) => {
    const filteredReviews= reviews.filter((element, index) => {
      return element.name !== name;
    });
    setReviews(filteredReviews);
  };

 
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  return (
    <div className="container mx-auto  flex  justify-around table mt-20">
      <div>
        <div className="text-center text-4xl">
          <h1>You can review here</h1>
        </div>
        <div className="flex justify-around mt-20">
          <div className="form-container">
            <form className="shadow-lg mb-12" onSubmit={handleAddReviewSubmit}>
              <div className="w-80 h-60">
                <div className="mb-10">
                  <div className="ml-20 text-lg">
                    <label>Name</label>
                  </div>
                  <input
                    type="text"
                    className="input input-sm mt-6 w-64 ml-5"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  ></input>
                </div>

                <div className="mb-10">
                  <div className="ml-20 text-lg">
                    <label className="mb-12">Description</label>
                  </div>
                  <input
                    type="text"
                    className="input input-sm   mt-6 w-64 ml-5"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></input>
                </div>
              </div>

              <button type="submit" className=" btn  ml-16 w-40 mb-10">
                ADD
              </button>
            </form>
          </div>

          <div>
            {reviews.length > 0 && (
              <>
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Decription</th>

                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View reviews={reviews} deleteReview={deleteReview} />
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn btn-danger btn-md mt-12"
                  onClick={() => setReviews([])}
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
