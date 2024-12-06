import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../Auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateEquipment = () => {
  const { id } = useParams(); // Fetch the equipment ID from the route params
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Access user information
  const [equipmentData, setEquipmentData] = useState(null); // State to hold equipment data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch equipment data by ID
  useEffect(() => {
    fetch(`//localhost:5000/equipment/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch equipment data.");
        }
        return res.json();
      })
      .then((data) => setEquipmentData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  // Handle form submission
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedEquipment = {
      itemName: form.itemName.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
    };

    fetch(`//localhost:5000/equipment/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update equipment data.");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Equipment updated successfully!");
        navigate("/my-equipment-list"); // Redirect to the equipment list page
      })
      .catch((error) => setError(error.message));
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading equipment data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
        Update Equipment
      </h1>
      <form onSubmit={handleUpdate} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user?.displayName || ""}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="itemName">
            Equipment Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            defaultValue={equipmentData?.itemName || ""}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={equipmentData?.description || ""}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={equipmentData?.image || ""}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={equipmentData?.category || ""}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="btn bg-orange-500 text-white hover:bg-orange-600"
          >
            Update Equipment
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UpdateEquipment;
