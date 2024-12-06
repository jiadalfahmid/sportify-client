import React, { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Convert numeric fields to numbers
    const processedFormData = {
      ...formData,
      price: parseFloat(formData.price), // Convert price to number
      rating: parseFloat(formData.rating), // Convert rating to number
    };

    try {
      const response = await fetch(
        "https://sportify-sand-six.vercel.app/equipment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(processedFormData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Equipment added successfully!");
        setFormData({
          image: "",
          itemName: "",
          categoryName: "",
          description: "",
          price: "",
          rating: "",
          customization: "",
          processingTime: "",
          stockStatus: "",
          userEmail: user?.email || "",
          userName: user?.displayName || "",
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to add equipment.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-200 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">
        Add New Equipment
      </h1>

      {successMessage && (
        <div className="p-4 mb-6 text-green-700 bg-green-100 border border-green-400 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="p-4 mb-6 text-red-700 bg-red-100 border border-red-400 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Image
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Item Name */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              step="0.1"
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Stock Status */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Stock Status
            </label>
            <input
              type="text"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Customization */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Customization
            </label>
            <input
              type="text"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block text-base-content font-medium mb-2">
            Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Processing Time */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-base-content font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base-content font-medium mb-2">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2"
              readOnly
            />
          </div>
          <div>
            <label className="block text-base-content font-medium mb-2">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2"
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-orange-500 text-white font-bold py-2 px-6 rounded ${
              isLoading
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-orange-600 transition"
            }`}
          >
            {isLoading ? "Adding..." : "Add Equipment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
