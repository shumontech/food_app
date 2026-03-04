
import Image from "next/image";
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 border hover:shadow-xl transition duration-300">

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
        <Image
  src={review.photo} // যদি API data photo field দেয়
  alt={review.user}
  fill
  className="rounded-full object-cover"
/>
        </div>

        <div>
          <h3 className="font-semibold text-lg">{review.user}</h3>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            {index < review.rating ? "★" : "☆"}
          </span>
        ))}
        <span className="text-gray-600 ml-2 text-sm">
          ({review.rating}.0)
        </span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t">
        <span>
          👍 {review.likes.length} Likes
        </span>

        <span>
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>

    </div>
  );
};

export default ReviewCard;