import React from "react";

function Worldmap() {
  return (
    <div
      className="flex flex-col justify-center bg-fixed bg-cover  items-center pt-8"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(public/extra-images/100-photo-pile.jpg)`,
        backgroundAttachment: "fixed", // Inline style for fixed background
        backgroundSize: "cover", // Ensure the image covers the element
        backgroundPosition: "center", // Center the image
      }}
    >
      <div>
        <h2 className="text-3xl text-white font-bold bg-blue-600">
          Teachers from over 170 countries
        </h2>
      </div>
      <div className="w-[900px] object-contain">
        <img
          className="w-full "
          src="public/extra-images/world-map-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Worldmap;
