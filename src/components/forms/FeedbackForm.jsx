"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      const data = await res.json();

      setSuccess(data.message || "Feedback submitted!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setSuccess("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center text-2xl font-bold">
          Add Your Feedback Here
        </div>

        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border w-full p-2"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full p-2"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border w-full p-2"
          rows="5"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 w-full"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && (
          <p className="text-center text-green-600">{success}</p>
        )}
      </form>
    </div>
  );
}