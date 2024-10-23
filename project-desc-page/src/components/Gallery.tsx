import React from "react";
import gtaImage from "../assets/gta-5.jpg";

const Gallery = () => {
  return (
    <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <img src={gtaImage} alt="Nature 1" className="object-cover w-full h-64" />
    </section>
  );
};

export default Gallery;
