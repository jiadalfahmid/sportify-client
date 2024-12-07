import React, { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const {
    login,
    setError,
    error,
    loading,
    success,
    setSuccess,
    signUpWithGoogle,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setError("");
      await login(email, password);
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        navigate(from);
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      setError("");
      await signUpWithGoogle();
      toast.success("Google login successful! Redirecting...");
      setTimeout(() => {
        navigate(from);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="mx-auto min-h-screen flex justify-center items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-xl rounded-lg">
        <form onSubmit={handleSubmit} className="card-body p-6">
          <h2 className="text-center text-3xl font-bold text-base-content mb-6">
            Welcome Back!
          </h2>
          {/* Error Toast */}
          {error && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-error">
                <span>{`Login Failed: ${error}`}</span>
              </div>
            </div>
          )}

          {/* Success Toast */}
          {success && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-success">
                <span>{`Success: ${success}`}</span>
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-base-content">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text text-base-content">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-12 text-lg text-base-content"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-base-content mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Register Now
            </Link>
          </p>

          {/* OR Divider */}
          <div className="divider my-6 text-base-content">OR</div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline text-orange-500 border-orange-500 w-full hover:bg-orange-500 hover:text-white"
            disabled={loading}
          >
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
