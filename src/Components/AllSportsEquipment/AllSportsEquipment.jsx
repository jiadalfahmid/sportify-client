import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipmentList, setEquipmentList] = useState(null); // null indicates data loading
  const [isSorting, setIsSorting] = useState(false);
  const navigate = useNavigate();

  const fetchEquipment = (sort = false) => {
    setIsSorting(sort);
    const url = sort
      ? "http://localhost:5000/equipment/sorted?sort=price_desc"
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
    fetchEquipment(true); // Fetch sorted data
  };

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
        All Sports Equipment
      </h1>

      {/* Sort Button */}
      <div className="text-right mb-4">
        <button
          onClick={handleSort}
          className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition ${
            isSorting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Sort by Price (Descending)"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-none border">
          <thead className="bg-base-300">
            <tr>
              <th className="border-none pr-12 py-2"></th>
              <th className="border-none pr-12 py-2">Name</th>
              <th className="border-none pr-12 py-2">Category</th>
              <th className="border-none pr-8 py-2">Price</th>
              <th className="border-none pr-2 py-2">Stock</th>
              <th className="border-none"></th>
            </tr>
          </thead>
          <tbody>
            {!equipmentList &&
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="hover:bg-base-200">
                    <td className="px-4 py-2">
                      <div className="w-36 h-36 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-24 h-6 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-20 h-6 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-16 h-6 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-20 h-6 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="w-24 h-8 bg-base-300 skeleton rounded-md shadow-md"></div>
                    </td>
                  </tr>
                ))}

            {equipmentList &&
              equipmentList.map((item) => (
                <tr key={item._id} className="hover:bg-base-200">
                  <td className="border-none px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-36 h-36 object-cover rounded bg-white"
                    />
                  </td>
                  <td className="border-none px-4 py-2">{item.itemName}</td>
                  <td className="border-none px-4 py-2">{item.categoryName}</td>
                  <td className="border-none px-4 py-2">${item.price}</td>
                  <td className="border-none px-4 py-2">{item.stockStatus}</td>
                  <td className="border-none px-4 py-2 text-center">
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
