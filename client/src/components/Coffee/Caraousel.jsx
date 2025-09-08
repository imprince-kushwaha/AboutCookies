// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Carousel = () => {
//   const images = [
//     "./src/assets/main-banner-1.png",
//     "./src/assets/main-banner-2.png",
//     "./src/assets/main-banner-3.png",
//     "./src/assets/main-banner-4.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Header stays fixed above carousel */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       {/* Image carousel slides underneath header */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-transform duration-700 ease-in-out`}
//             style={{
//               transform: `translateX(${100 * (index - currentIndex)}%)`,
//             }}
//           >
//             <img
//               src={img}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;












// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import CaraouselOverlay from "./CaraouselOverlay";

// const Carousel = () => {
//   const slides = [
//     {
//       img: "./src/assets/main-banner-1.png",
//       position: "left",
//     },
//     {
//       img: "./src/assets/main-banner-2.png",
//       position: "right",
//     },
//     {
//       img: "./src/assets/main-banner-3.png",
//       position: "right",
//     },
//     {
//       img: "./src/assets/main-banner-4.png",
//       position: "left",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   // useEffect(() => {
//   //   const interval = setInterval(nextSlide, 5000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Fixed Header */}
      // <div className="fixed top-0 left-0 w-full z-50">
      //   <Header />
      // </div>

//       {/* Slides */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="absolute w-full h-full transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(${100 * (index - currentIndex)}%)`,
//             }}
//           >
//             {/* Background Image */}
//             <img
//               src={slide.img}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay Content */}
//             <div
//               className={`absolute top-1/2 -translate-y-1/2 p-6 max-w-md text-white`}
//               style={{
//                 [slide.position]: "15%",
//               }}
//             >
//               <CaraouselOverlay />
//             </div>

//             {/* <div
//   className={`
//     absolute top-1/2 -translate-y-1/2 p-6 max-w-md text-white
//     transform left-1/2 -translate-x-1/2
//     sm:left-auto sm:translate-x-0
//     ${slide.position === "left" ? "sm:left-[15%]" : "sm:right-[15%]"}
//   `}
// >
//   <CaraouselOverlay />
// </div> */}
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;




import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CaraouselOverlay from "./CaraouselOverlay";
import Header from "./Header";

const Carousel = () => {
  const slides = [
    { img: "./src/assets/main-banner-1.png", position: "left" },
    { img: "./src/assets/main-banner-2.png", position: "right" },
    { img: "./src/assets/main-banner-3.png", position: "right" },
    { img: "./src/assets/main-banner-4.png", position: "left" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      {/* Slides */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 p-4 sm:p-6 text-white w-[90%] sm:max-w-md`}
              style={{
                [slide.position]: "5%",
              }}
            >
              <CaraouselOverlay />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full z-10"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
