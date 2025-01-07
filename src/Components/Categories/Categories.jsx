import React from "react";
import { FaTshirt, FaShoePrints, FaDumbbell, FaBasketballBall, FaAppleAlt } from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Accessories",
      icon: <FaBasketballBall className="text-4xl text-orange-500" />,
    },
    {
      id: 2,
      name: "Footwear",
      icon: <FaShoePrints className="text-4xl text-green-500" />,
    },
    {
      id: 3,
      name: "Equipment",
      icon: <FaDumbbell className="text-4xl text-blue-500" />,
    },
    {
      id: 4,
      name: "Apparel",
      icon: <FaTshirt className="text-4xl text-purple-500" />,
    },
    {
      id: 5,
      name: "Nutrition",
      icon: <FaAppleAlt className="text-4xl text-red-500" />,
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Explore Sports Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {/* Category Icon */}
              <div className="mb-4">{category.icon}</div>

              {/* Category Name */}
              <h3 className="text-lg font-semibold text-base-content">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
