"use client";

import ReviewCard from "@/components/card/ReviewCard";
import React, { useEffect, useState } from "react";


const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {setReviews(data.reviews);
       
      })
  }, []);

 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Total{" "}
        <span className="font-bold text-red-600">{reviews.length}</span>{" "}
        Reviews Found
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;