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
    try {
      const response = await fetch(
        "https://sportify-sand-six.vercel.app/equipment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
    <div className="max-w-2xl mx-auto my-10 p-6 bg-base-200 shadow-lg rounded-md">
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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Fields */}
        {Object.keys(formData)
          .filter((key) => key !== "userEmail" && key !== "userName")
          .map((key) => (
            <div key={key}>
              <label className="block text-base-content font-medium">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type={key === "description" ? "textarea" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
          ))}

        {/* Read-only Fields */}
        <div>
          <label className="block text-base-content font-medium">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            className="w-full border rounded p-2 bg-gray-100"
            readOnly
          />
        </div>
        <div>
          <label className="block text-base-content font-medium">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            className="w-full border rounded p-2 bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-orange-500 text-white font-bold py-2 px-4 rounded ${
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
