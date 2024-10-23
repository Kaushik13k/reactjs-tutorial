import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <div className="text-lg font-bold">Travel Guider</div>
      <div className="space-x-4">
        <button className="hover:underline">Where to Go</button>
        <button className="hover:underline">Where to Eat</button>
        <button className="hover:underline">Places to Stay</button>
        <button className="hover:underline">What to Do</button>
      </div>
      <div className="space-x-4">
        <button>Subscribe</button>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
