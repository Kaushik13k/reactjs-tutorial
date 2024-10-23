import React from "react";

const LeftSidebar = ({ note }) => {
  return (
    <div className="fixed ml-16 left-0 top-1/3 w-48 px-4 py-4 text-gray-400">
      <p className="text-sm italic border-l-2 border-gray-600 pl-2">{note}</p>
    </div>
  );
};

export default LeftSidebar;
