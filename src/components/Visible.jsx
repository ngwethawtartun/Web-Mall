import React from "react";

const Visible = ({reviews, deleteReview }) => {
  return reviews.map((Review) => (
    <tr key={Review.name} >
      
      <td>{Review.name}</td>
      <td>{Review.description}</td>
      <button className="text-center justify-center" onClick={() => deleteReview(Review.name)}>
        Delete
      </button>
    </tr>
  ));
};

export default Visible;
