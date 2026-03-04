"use client";

import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm animate-pulse overflow-hidden">
      
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>

        {/* Category + Price */}
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/6"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;