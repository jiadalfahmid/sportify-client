import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateEquipment = () => {
  const { id } = useParams(); // Retrieve equipment ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    category: "",
    condition: "",
    quantity: "",
    userEmail: "",
    userName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch current equipment data to populate the form
  useEffect(() => {
    fetch(`https://sportify-sand-six.vercel.app/equipment/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch equipment details.");
        }
        return res.json();
      })
      .then((data) => {
        setFormData({
          itemName: data.itemName || "",
          image: data.image || "",
          description: data.description || "",
          price: data.price || "",
          categoryName: data.categoryName || "",
          rating: data.rating || "",
          stockStatus: data.stockStatus || "",
          processingTime: data.processingTime || "",
          customization: data.customization || "",
          userEmail: data.userEmail || "",
          userName: data.userName || "",
        });
      })
      .catch((error) => setError(error.message));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedFormData = {
      ...formData,
      price: parseFloat(formData.price),
    };

    fetch(`https://sportify-sand-six.vercel.app/equipment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update equipment.");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Equipment updated successfully!");
        setTimeout(() => navigate("/my-equipment-list"), 2000); 
      })
      .catch((error) => {
        toast.error(error.message);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-base-200 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">
        Update Equipment
      </h1>
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["image", "itemName", "categoryName", "rating", "stockStatus", "customization", "processingTime"].map((key) => (
            <div key={key}>
              <label className="block text-base-content font-medium mb-2">
                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
                required
              />
            </div>
          ))}

          {/* Price Field (Numeric Input) */}
          <div>
            <label className="block text-base-content font-medium mb-2">Price</label>
            <input
              type="number" // Set input type to number
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>

          {/* Description Field */}
          <div className="md:col-span-2">
            <label className="block text-base-content font-medium mb-2">Description</label>
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

        {/* Read-only Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base-content font-medium mb-2">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-base-content font-medium mb-2">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              className="w-full border border-gray-300 bg-base-100 text-base-content rounded p-2 focus:outline-none focus:ring focus:ring-orange-500"
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
              isLoading ? "cursor-not-allowed opacity-50" : "hover:bg-orange-600 transition"
            }`}
          >
            {isLoading ? "Updating..." : "Update Equipment"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateEquipment;
