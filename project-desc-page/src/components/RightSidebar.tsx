import React from "react";

const RightSidebar = ({ items }) => {
  return (
    <div className="fixed mr-24 right-0 top-1/3 w-48 px-4 py-4 text-gray-400">
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
