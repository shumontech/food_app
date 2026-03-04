"use client";




import Image from "next/image";

import Link from "next/link";
import CardButtons from "../buttons/CardButtons";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-full max-w-sm">

      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={food.foodImg}
          alt={food?.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{food.title}</h2>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
            {food.category}
          </span>
          <span className="font-semibold text-gray-800">৳ {food.price}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          
          <CardButtons food={food} />

          <Link
            href={`/food/${food.id}`}
            className="flex-1 text-center border border-gray-300 hover:bg-gray-100 py-2 rounded-lg text-sm font-semibold transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;