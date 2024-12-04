import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FaSun, FaMoon } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(`Logout error: ${err.message}`);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold px-3 py-2 rounded ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-base-content hover:bg-orange-500 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-sports-equipment"
          className={({ isActive }) =>
            `font-semibold px-3 py-2 rounded ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-base-content hover:bg-orange-500 hover:text-white"
            }`
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-equipment"
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-base-content hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              Add Equipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-equipment-list"
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-base-content hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              My Equipment List
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" bg-base-200">
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 bg-base-100 rounded-box shadow-lg gap-2">
              {links}
            </ul>
          </div>
          <p className="normal-case text-xl font-bold text-base-content">Sport<span className="text-orange-500 italic">i</span>fy</p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <button
            className="text-2xl cursor-pointer text-base-content btn hover:bg-base-300 btn-circle btn-ghost hover:text-orange-500"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {user ? (
            <>
              <div className="group relative">
                <div className="btn btn-ghost btn-circle avatar">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-base-200 text-base-content text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "User"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-orange-500 hover:bg-orange-600 text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-orange-500 hover:bg-orange-600 text-white"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
};

export default Navbar;
