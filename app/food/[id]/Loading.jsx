const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-pulse">
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-2xl"></div>

        {/* Details Skeleton */}
        <div className="space-y-6">
          
          {/* Title */}
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>

          {/* Category */}
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>

          {/* Price */}
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>

          {/* Button */}
          <div className="h-12 bg-gray-300 rounded-xl w-40 mt-4"></div>

        </div>
      </div>

    </div>
  );
};

export default Loading;