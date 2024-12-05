import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EquipmentDetails = () => {
  const { id } = useParams(); 
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((error) => console.error("Error fetching details:", error));
  }, [id]);

  if (!equipment) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-orange-500">Loading...</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={itemName}
            className="w-full max-w-md object-cover rounded shadow-md"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-4">{itemName}</h1>
          <p className="text-gray-600 text-sm mb-2">Category: {categoryName}</p>
          <p className="text-gray-800 text-lg mb-4">{description}</p>

          {/* Pricing & Rating */}
          <div className="flex items-center mb-4">
            <p className="text-2xl font-semibold text-orange-600 mr-4">${price}</p>
            <p className="text-yellow-500 font-medium flex items-center">
              ⭐ {rating} / 5
            </p>
          </div>

          {/* Customization */}
          <div className="mb-4">
            <h3 className="font-bold text-gray-700 mb-1">Customization:</h3>
            <p className="text-gray-600">{customization}</p>
          </div>

          {/* Processing Time */}
          <div className="mb-4">
            <h3 className="font-bold text-gray-700 mb-1">Processing Time:</h3>
            <p className="text-gray-600">{processingTime}</p>
          </div>

          {/* Stock Status */}
          <div className="mb-4">
            <h3 className="font-bold text-gray-700 mb-1">Stock Status:</h3>
            <p className={`font-semibold ${stockStatus > 0 ? "text-green-600" : "text-red-600"}`}>
              {stockStatus > 0 ? `${stockStatus} items available` : "Out of stock"}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EquipmentDetails;
