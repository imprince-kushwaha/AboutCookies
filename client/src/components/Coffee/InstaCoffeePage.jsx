import React from "react";

const InstaCoffeePage = () => {
  const images = [
    "instagram-1.png",
    "instagram-2.png",
    "instagram-3.png",
    "instagram-4.png",
    "instagram-5.png",
    "instagram-6.png",
  ];
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: "url('src/assets/Instagram-bg.png')" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#2b1b14]">
          @Cuppanord Coffee
        </h2>
      </div>

      <div className="max-w-10/12 mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={`src/assets/${img}`}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaCoffeePage;
