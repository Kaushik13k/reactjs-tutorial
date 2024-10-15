import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-start bg-gray-200 p-2 rounded-t-lg">
          <div className="w-3 h-3 bg-gray-500 rounded-full ml-2"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full ml-2"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full ml-2"></div>

          <div className="px-4 py-1">
            <input
              type="text"
              className="w-full px-9 py-0.5 border border-gray-200 rounded-md"
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
          <span className="text-gray-700 font-medium text-2xl mt-4">460</span>
        </div>
      </div>
    </div>
  );
};

export default App;
