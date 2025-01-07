import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Fade } from "react-awesome-reveal";

const AllSportsEquipment = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const navigate = useNavigate();

  const fetchEquipment = (sort = false) => {
    setIsSorting(sort);
    const url = sort
      ? "https://sportify-sand-six.vercel.app/equipment/sorted?sort=price_desc"
      : "https://sportify-sand-six.vercel.app/equipment";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEquipmentList(data))
      .catch((error) => console.error("Error fetching equipment:", error))
      .finally(() => setIsSorting(false));
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const handleSort = () => {
    fetchEquipment(true);
  };

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="mx-auto p-6 bg-base-200">
      <div className="container mx-auto">
        <Fade duration={200}>
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            All Sports Equipment
          </h1>
        </Fade>
        {/* Sort Button */}
        <div className="text-right mb-4">
          <button
            onClick={handleSort}
            className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition ${
              isSorting ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSorting}
          >
            {isSorting ? "Sorting..." : "Sort by Price (Ascending)"}
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {equipmentList.length === 0
            ? // Skeleton Loaders
              Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-base-100 border border-base-200 rounded-lg shadow-md overflow-hidden animate-pulse"
                >
                  {/* Skeleton Image */}
                  <div className="w-full h-48 bg-base-300"></div>
                  {/* Skeleton Details */}
                  <div className="p-4">
                    <div className="h-6 bg-base-300 rounded mb-4"></div>
                    <div className="h-4 bg-base-300 rounded mb-3"></div>
                    <div className="h-4 bg-base-300 rounded"></div>
                    <div className="flex items-center justify-between mt-4">
                      {/* Skeleton Price */}
                      <div className="h-6 bg-base-300 rounded w-20"></div>
                      {/* Skeleton Rating */}
                      <div className="h-6 bg-base-300 rounded w-16"></div>
                    </div>
                  </div>
                  {/* Skeleton Button */}
                  <div className="p-4 bg-base-200 flex justify-between items-center">
                    <div className="h-4 bg-base-300 rounded w-24"></div>
                    <div className="h-8 bg-base-300 rounded w-20"></div>
                  </div>
                </div>
              ))
            : // Product Cards
              equipmentList.map((product) => (
                <div
                  key={product._id}
                  className="bg-base-100 border border-base-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="w-48 mx-auto h-48 object-cover"
                  />
                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-base-content">
                      {product.itemName}
                    </h3>
                    <p className="text-sm text-base-content mt-1">
                      {product.categoryName}
                    </p>
                    <p className="text-sm line-clamp-1 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      {/* Price */}
                      <p className="text-lg font-bold text-orange-500">
                        ${product.price}
                      </p>
                      {/* Rating */}
                      <span className="text-sm text-base-content flex items-center">
                        <ReactStars
                          count={5}
                          value={product.rating}
                          size={16}
                          isHalf={true}
                          edit={false}
                          activeColor="#ffc107"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-base-200 flex justify-between items-center">
                    <p className="text-sm text-base-content">
                      {product.stockStatus > 0
                        ? `${product.stockStatus} in stock`
                        : "Out of stock"}
                    </p>
                    <Link
                      to={`/equipment/${product._id}`}
                      className="px-4 py-2 bg-orange-500 text-white text-sm rounded shadow hover:bg-orange-600 transition duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
