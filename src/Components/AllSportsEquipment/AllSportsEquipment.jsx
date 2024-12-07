import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AllSportsEquipment = () => {
  const [equipmentList, setEquipmentList] = useState(null);
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
    <div className="max-w-6xl mx-auto p-6">
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
          {isSorting ? "Sorting..." : "Sort by Price"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-none">
          <thead className="bg-base-300">
            <tr>
              <th className="pr-4 py-2"></th>
              <th className="pr-4 py-2">Name</th>
              <th className="pr-4 py-2 hidden md:table-cell">Category</th>
              <th className="pr-4 py-2 hidden sm:table-cell">Price</th>
              <th className="pr-4 py-2 hidden md:table-cell">Stock</th>
              <th className="pr-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {!equipmentList &&
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="hover:bg-base-200">
                    <td className="px-4 py-2">
                      <div className="w-24 h-24 bg-base-300 skeleton rounded-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-20 h-6 bg-base-300 skeleton rounded-md"></div>
                    </td>
                    <td className="px-4 py-2 hidden md:table-cell">
                      <div className="w-20 h-6 bg-base-300 skeleton rounded-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-16 h-6 bg-base-300 skeleton rounded-md"></div>
                    </td>
                    <td className="px-4 py-2 hidden sm:table-cell">
                      <div className="w-20 h-6 bg-base-300 skeleton rounded-md"></div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-24 h-8 bg-base-300 skeleton rounded-md"></div>
                    </td>
                  </tr>
                ))}

            {equipmentList &&
              equipmentList.map((item) => (
                <tr key={item._id} className="hover:bg-base-200">
                  <td className="md:px-4 md:py-2">
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-full md:w-24 h-16 md:h-24 object-cover rounded-md bg-white"
                    />
                  </td>
                  <td className="px-4 py-2">{item.itemName}</td>
                  <td className="px-4 py-2 hidden md:table-cell">{item.categoryName}</td>
                  <td className="px-4 py-2 hidden md:table-cell">${item.price}</td>
                  <td className="px-4 py-2 hidden md:table-cell">{item.stockStatus}</td>
                  <td className="px-4 py-2">
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
