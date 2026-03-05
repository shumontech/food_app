"use client";

import React from "react";
import { format } from "date-fns";

interface FeedbackProps {
  feedback: {
    _id: string;
    message: string;
    date: string;
  };
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const FeedbackCard: React.FC<FeedbackProps> = ({ feedback, onUpdate, onDelete }) => {
  const feedbackDate = feedback?.date ? new Date(feedback.date) : new Date();

  return (
    <div className="p-4 bg-white shadow rounded-md border border-gray-200">
      
      {/* Extra text at the top */}
      <p className="text-sm text-gray-400 mb-2 italic">User Feedback</p>
      
      <p className="text-gray-800 mb-2">{feedback?.message}</p>
      <p className="text-sm text-gray-500 mb-4">
        {format(feedbackDate, "PPPpp")}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(feedback._id)}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(feedback._id)}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;