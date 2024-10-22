import React from "react";

const ArrowButtons = ({ onPrevClick, onNextClick, disabled }) => {
  return (
    <>
      {/* Previous (left) arrow button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onPrevClick();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition hover:bg-opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 z-9"
        disabled={disabled}
      >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
      </button>

      {/* Next (right) arrow button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onNextClick();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 z-9"
        disabled={disabled}
      >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
      </button>
    </>
  );
};

export default ArrowButtons;