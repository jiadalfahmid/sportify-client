import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, setError, setSuccess, signUpWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    try {
      await login(email, password);
      setSuccess("Login successful!");
      toast.success("Login successful! Redirecting...");
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signUpWithGoogle();
      toast.success("Google sign-in successful! Redirecting...");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="mx-auto min-h-screen p-16 flex max-md:flex-col-reverse justify-center items-center bg-base-200">
      <div className="md:w-1/2">
        <img src="./Login.png" alt="Login Illustration" />
      </div>

      <div className="card bg-base-100 w-full max-w-md shadow-xl rounded-lg">
        <form onSubmit={handleSubmit} className="card-body p-6">
          <h2 className="text-center text-3xl font-bold text-base-content mb-6">
            Welcome Back!
          </h2>

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

          <div className="form-control mb-6 relative">
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

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="text-center text-base-content mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Sign Up
            </Link>
          </p>

          <div className="divider my-6 text-base-content">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline text-orange-500 border-orange-500 w-full hover:bg-orange-500 hover:text-white"
            disabled={loading}
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
