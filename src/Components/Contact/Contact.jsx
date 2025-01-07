import React, { useState } from "react";
import { IoIosMail, IoIosCall } from "react-icons/io";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto min-h-screen p-16 flex max-md:flex-col justify-center items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-xl rounded-lg">
        <form onSubmit={handleSubmit} className="card-body p-6">
          <h2 className="text-center text-3xl font-bold text-base-content mb-6">
            Get in Touch
          </h2>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-base-content">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

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

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-base-content">Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h3 className="text-2xl font-bold text-base-content mb-4">
          Contact Information
        </h3>
        <p className="text-base-content mb-6">
          We’d love to hear from you! Fill out the form, or reach out to us
          directly via email or phone.
        </p>
        <div className="flex items-center mb-4">
          <IoIosMail className="text-orange-500 text-2xl mr-3" />
          <span className="text-base-content">support@sportify.com</span>
        </div>
        <div className="flex items-center">
          <IoIosCall className="text-orange-500 text-2xl mr-3" />
          <span className="text-base-content">+123 456 7890</span>
        </div>
        <div className="">
         <img src="./Contact.png" alt="Contact" className="lg:h-[420px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
