import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../Auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const MyEquipmentList = () => {
  const [userEquipment, setUserEquipment] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://sportify-sand-six.vercel.app/equipment/user?email=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch equipment data.");
          }
          return res.json();
        })
        .then((data) => setUserEquipment(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    fetch(`https://sportify-sand-six.vercel.app/equipment/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete equipment.");
        }
        return res.json();
      })
      .then(() => {
        // Remove the deleted item from the UI
        setUserEquipment((prevEquipment) =>
          prevEquipment.filter((item) => item._id !== id)
        );
        document.getElementById("delete_modal").close();
        // Show a success toast after deletion
        toast.success("Equipment deleted successfully!");
      })
      .catch((error) => setError(error.message));
  };

  const openDeleteModal = (equipment) => {
    setSelectedEquipment(equipment);
    document.getElementById("delete_modal").showModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
        My Equipment List
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading equipment...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : userEquipment.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any equipment yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userEquipment.map((equipment) => (
            <div key={equipment._id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={equipment.image || "https://via.placeholder.com/150"}
                  alt={equipment.itemName}
                  className="rounded-xl w-36 h-36 object-cover bg-white"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{equipment.itemName}</h2>
                <p>{equipment.description}</p>
                <div className="card-actions flex gap-4">
                  <button
                    className="btn bg-orange-500 text-white hover:bg-orange-600"
                    onClick={() => handleUpdate(equipment._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => openDeleteModal(equipment)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Confirm Deletion</h3>
          <p className="py-4">
            Are you sure you want to delete{" "}
            <span className="font-bold">
              {selectedEquipment ? selectedEquipment.itemName : ""}
            </span>
            ?
          </p>
          <div className="modal-action">
            <button
              className="btn btn-error"
              onClick={() => handleDelete(selectedEquipment._id)}
            >
              Delete
            </button>
            <button
              className="btn"
              onClick={() => document.getElementById("delete_modal").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default MyEquipmentList;
