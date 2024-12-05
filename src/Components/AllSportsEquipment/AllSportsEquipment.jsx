import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => setEquipmentList(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`); // Redirect to details page with equipment ID
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
        All Sports Equipment
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Item Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.itemName}</td>
                <td className="border border-gray-300 px-4 py-2">{item.categoryName}</td>
                <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                <td className="border border-gray-300 px-4 py-2">{item.stockStatus}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
