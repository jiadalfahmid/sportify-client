import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

const EquipmentDetails = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    fetch(`https://sportify-sand-six.vercel.app/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((error) => console.error("Error fetching details:", error));
  }, [id]);

  if (!equipment) {
    return (
      <div className="max-w-7xl mx-auto p-6 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 bg-base-300 skeleton rounded-md shadow-md"></div>
          </div>

          {/* Details Section */}
          <div>
            {/* Title */}
            <div className="h-8 bg-base-300 skeleton rounded-md mb-4 w-3/4"></div>
            {/* Category */}
            <div className="h-4 bg-base-300 skeleton rounded-md mb-2 w-1/2"></div>
            {/* Description */}
            <div className="h-6 bg-base-300 skeleton rounded-md mb-4 w-full"></div>

            {/* Pricing & Rating */}
            <div className="flex items-center mb-4">
              {/* Price */}
              <div className="h-6 bg-base-300 skeleton rounded-md w-16 mr-6"></div>
              {/* Rating */}
              <div className="h-5 bg-base-300 skeleton rounded-md w-24"></div>
              <div className="h-4 bg-base-300 skeleton rounded-md w-8 ml-2"></div>
            </div>

            {/* Customization */}
            <div className="mb-4">
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/4 mb-2"></div>
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/2"></div>
            </div>

            {/* Processing Time */}
            <div className="mb-4">
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/4 mb-2"></div>
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/2"></div>
            </div>

            {/* Stock Status */}
            <div className="mb-4">
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/4 mb-2"></div>
              <div className="h-4 bg-base-300 skeleton rounded-md w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <div className="h-10 bg-base-300 skeleton rounded-md w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipment;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 bg-gray-200 rounded-md shadow-md flex items-center justify-center">
            <img
              src={image}
              alt={itemName}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            {itemName}
          </h1>
          <p className="text-base-content text-sm mb-2">
            Category: {categoryName}
          </p>
          <p className="text-base-content text-lg mb-4">{description}</p>

          {/* Pricing & Rating */}
          <div className="flex items-center mb-4">
            <p className="text-2xl font-semibold text-orange-600 mr-6">
              ${price}
            </p>
            <ReactStars
              count={5}
              value={rating}
              size={16}
              isHalf={true}
              edit={false}
              activeColor="#ffc107"
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fas fa-star-half-alt"></i>}
              filledIcon={<i className="fas fa-star"></i>}
            />
            <p className="text-base-content ml-2">({rating})</p>
          </div>

          {/* Customization */}
          <div className="mb-4">
            <h3 className="font-bold text-base-content mb-1">Customization:</h3>
            <p className="text-base-content">{customization}</p>
          </div>

          {/* Processing Time */}
          <div className="mb-4">
            <h3 className="font-bold text-base-content mb-1">
              Processing Time:
            </h3>
            <p className="text-base-content">{processingTime}</p>
          </div>

          {/* Stock Status */}
          <div className="mb-4">
            <h3 className="font-bold text-base-content mb-1">Stock Status:</h3>
            <p
              className={`font-semibold ${
                stockStatus > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stockStatus > 0
                ? `${stockStatus} items available`
                : "Out of stock"}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EquipmentDetails;
