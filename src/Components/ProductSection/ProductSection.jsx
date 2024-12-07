import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://sportify-sand-six.vercel.app/equipment"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-10 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Explore Our Sports Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0
            ? // Skeleton Loaders
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-base-100 border border-base-200 rounded-lg shadow-md overflow-hidden animate-pulse"
                >
                  {/* Skeleton Image */}
                  <div className="w-full h-96 bg-base-300"></div>

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
            : // Actual Product Cards
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-base-100 border border-base-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="w-full h-96 object-cover"
                  />

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-base-content">
                      {product.itemName}
                    </h3>
                    <p className="text-sm text-base-content mt-1">
                      {product.categoryName}
                    </p>
                    <p className="text-base-content text-sm mt-2 line-clamp-2">
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
                        <p className="text-base-content ml-2">
                          ({product.rating})
                        </p>
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
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

export default ProductSection;
