import Image from "next/image";
import React from "react";

const getFoodDetails = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data?.details || null;
  } catch (error) {
    console.log("Fetch Error:", error);
    return null;
  }
};

const Page = async ({ params }) => {
  const { id } = await params; // ✅ important fix

  const foodDetails = await getFoodDetails(id);

  if (!foodDetails) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl font-semibold">
        Food Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Food Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={foodDetails.foodImg || "/placeholder.jpg"}
            alt={foodDetails.title}
            fill
            priority
            className="rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Food Info */}
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">
            {foodDetails.title}
          </h1>

          <p className="text-gray-600 text-lg">
            Category: <span className="font-medium">{foodDetails.category}</span>
          </p>

          <p className="text-3xl font-bold text-green-600">
            ৳ {foodDetails.price}
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl shadow-md transition duration-300">
            Order Now
          </button>
        </div>
      </div>

    
    
    </div>
  );
};

export default Page;