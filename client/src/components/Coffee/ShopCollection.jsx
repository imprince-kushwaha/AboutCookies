import React from "react";

const ShopCollection = () => {
  const featuresTop = [
    {
      title: "High Quality Coffee",
      text: `"High Quality Coffee" indicates a premium product. Here's how to effectively market that quality to your customers.`,
      icon: "/src/assets/icon-1.png",
    },
    {
      title: "Everyday Fresh Coffee",
      text: `"Everyday Fresh Coffee" finds the right balance between quality and accessibility.`,
      icon: "/src/assets/icon-2.png",
    },
    {
      title: "100% Organic",
      text: `"100% Organic Coffee" appeals to health-conscious and environmentally aware consumers.`,
      icon: "/src/assets/icon-3.png",
    },
  ];

  const featuresBottom = [
    {
      title: "Drink A Premium Coffee",
      text: `"Drink Premium Coffee" invites customers to enjoy an exceptional coffee experience.`,
      icon: "/src/assets/icon-4.png",
    },
    {
      title: "Natural Brew Coffee",
      text: `"Natural Brew Coffee" brings to mind pure coffee, highlighting its natural process and flavors.`,
      icon: "/src/assets/icon-5.png",
    },
    {
      title: "Quality Coffee Delivered",
      text: `"Drink a Premium Coffee" offers an elevated experience. Here’s how to enhance it in your marketing.`,
      icon: "/src/assets/icon-6.png",
    },
  ];

  const FeatureItem = ({ title, text, icon, reverse }) => (
    <div className={`flex gap-4 items-start ${reverse ? "flex-row-reverse text-right" : ""}`}>
      <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#5c3d2e] my-2">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-sm text-[#a07353] py-2">
          Shop Collection
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2b1b14] mb-10">
          Providing Unique Coffee Experience
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-3 gap-8 px-20">
        {/* Left Features */}
        <div className="flex flex-col gap-12">
          {featuresTop.map((f, i) => (
            <FeatureItem key={i} {...f} reverse />
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <img
            src="/src/assets/coffee.png"
            alt="coffee"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-12">
          {featuresBottom.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="lg:hidden flex flex-col items-center gap-10 px-6">
        {/* Top 3 Features */}
        <div className="flex flex-col gap-10 w-full">
          {featuresTop.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>

        {/* Center Image */}
        <img
          src="/src/assets/coffee.png"
          alt="coffee"
          className="w-3/4 max-w-sm object-contain"
        />

        {/* Bottom 3 Features */}
        <div className="flex flex-col gap-10 w-full">
          {featuresBottom.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;











// This one is mine in which image is adjusted at >md

// import React from "react";

// const ShopCollection = () => {
//   return (
//     <div className="py-12">
//       <div className="text-center mb-12">
//         <p className="uppercase tracking-widest text-sm text-[#a07353] py-2">
//           Shop Collection
//         </p>
//         <h1 className="text-3xl md:text-4xl font-bold text-[#2b1b14] mb-10">
//           Providing Unique Coffee Experience
//         </h1>
//       </div>

//       <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mx-4 md:mx-20">
//         {/* Left 3 Features */}
//         <div className="flex flex-col gap-16 md:mt-12">
//           <div className="flex gap-4 items-start">
//             <div>
//               <h3 className="font-bold text-xl text-[#5c3d2e] my-3 text-right md:text-right">
//                 High Quality Coffee
//               </h3>
//               <p className="text-gray-600 text-base leading-relaxed text-right md:text-right">
//                 "High Quality Coffee" indicates a premium product. Here's how to
//                 effectively market that quality to your customers.
//               </p>
//             </div>
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-1.png" alt="icon-1" />
//             </div>
//           </div>

//           <div className="flex gap-4 items-start">
//             <div>
//               <h2 className="font-bold text-xl text-[#5c3d2e] my-3 text-right md:text-right">
//                 Everyday Fresh Coffee
//               </h2>
//               <p className="text-gray-600 text-base leading-relaxed text-right md:text-right">
//                 "Everyday Fresh Coffee" finds the right balance between quality
//                 and accessibility.
//               </p>
//             </div>
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-2.png" alt="icon-2" />
//             </div>
//           </div>
          
//           <div className="flex gap-4 items-start">
//             <div>
//               <h2 className="font-bold text-xl text-[#5c3d2e] my-3 text-right md:text-right">
//                 100% Organic
//               </h2>
//               <p className="text-gray-600 text-base leading-relaxed text-right md:text-right">
//                 "100% Organic Coffee" appeals to health-conscious and
//                 environmentally aware consumers.
//               </p>
//             </div>
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-3.png" alt="icon-3" />
//             </div>
//           </div>
//         </div>

//         {/* Center Image */}
//         {/* <div className="my-12 md:my-0 flex justify-center">
//           <img src="/src/assets/coffee.png" alt="coffee" className="w-full" />
//         </div> */}
//         <div className="my-12 md:my-0 flex justify-center">
//   <img
//     src="/src/assets/coffee.png"
//     alt="coffee"
//     className="w-3/4 max-w-xs sm:max-w-sm  object-contain"
//   />
// </div>


//         {/* Right 3 Features */}
//         <div className="flex flex-col gap-16 md:mt-12">
//           <div className="flex gap-4 items-start">
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-4.png" alt="icon-4" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl text-[#5c3d2e] my-3">
//                 Drink A Premium Coffee
//               </h3>
//               <p className="text-gray-600 text-base">
//                 "Drink Premium Coffee" invites customers to enjoy an exceptional
//                 coffee experience.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 items-start">
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-5.png" alt="icon-5" />
//             </div>
//             <div>
//               <h2 className="font-bold text-xl text-[#5c3d2e] my-3">
//                 Natural Brew Coffee
//               </h2>
//               <p className="text-gray-600 text-base">
//                 "Natural Brew Coffee" brings to mind pure coffee, highlighting
//                 its natural process and flavors.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 items-start">
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 shrink-0">
//               <img src="/src/assets/icon-6.png" alt="icon-6" />
//             </div>
//             <div>
//               <h2 className="font-bold text-xl text-[#5c3d2e] my-3">
//                 Quality Coffee Delivered
//               </h2>
//               <p className="text-gray-600 text-base">
//                 "Drink a Premium Coffee" offers an elevated experience. Here’s
//                 how to enhance it in your marketing.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCollection;











// All section at one place below lg

// import React from "react";

// const featuresLeft = [
//   {
//     title: "High Quality Coffee",
//     text: `"High Quality Coffee" indicates a premium product. Here's how to effectively market that quality to your customers.`,
//     icon: "/src/assets/icon-1.png",
//   },
//   {
//     title: "Everyday Fresh Coffee",
//     text: `"Everyday Fresh Coffee" finds the right balance between quality and accessibility.`,
//     icon: "/src/assets/icon-2.png",
//   },
//   {
//     title: "100% Organic",
//     text: `"100% Organic Coffee" appeals to health-conscious and environmentally aware consumers.`,
//     icon: "/src/assets/icon-3.png",
//   },
// ];

// const featuresRight = [
//   {
//     title: "Drink A Premium Coffee",
//     text: `"Drink Premium Coffee" invites customers to enjoy an exceptional coffee experience.`,
//     icon: "/src/assets/icon-4.png",
//   },
//   {
//     title: "Natural Brew Coffee",
//     text: `"Natural Brew Coffee" brings to mind pure coffee, highlighting its natural process and flavors.`,
//     icon: "/src/assets/icon-5.png",
//   },
//   {
//     title: "Quality Coffee Delivered",
//     text: `"Drink a Premium Coffee" offers an elevated experience. Here’s how to enhance it in your marketing.`,
//     icon: "/src/assets/icon-6.png",
//   },
// ];

// const ShopCollection = () => {
//   return (
//     <div className="py-12">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <p className="uppercase tracking-widest text-sm text-[#a07353] py-2">
//           Shop Collection
//         </p>
//         <h1 className="text-3xl md:text-4xl font-bold text-[#2b1b14] mb-10">
//           Providing Unique Coffee Experience
//         </h1>
//       </div>

//       {/* Mobile Layout */}
//       <div className="flex flex-col lg:hidden items-center gap-8 px-6">
//         {/* Image first */}
//         <img
//           src="/src/assets/coffee.png"
//           alt="coffee"
//           className="w-3/4 max-w-sm object-contain"
//         />

//         {/* All features in one column */}
//         {[...featuresLeft, ...featuresRight].map((feature, index) => (
//           <div key={index} className="flex gap-4 items-start w-full">
//             <div className="bg-[#a07353] flex items-center justify-center rounded-full w-20 h-20 shrink-0">
//               <img src={feature.icon} alt={`icon-${index}`} />
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-[#5c3d2e] my-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {feature.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden lg:grid grid-cols-3 gap-8 px-20">
//         {/* Left Column */}
//         <div className="flex flex-col gap-12">
//           {featuresLeft.map((feature, index) => (
//             <div key={index} className="flex gap-4 items-start">
//               <div>
//                 <h3 className="font-bold text-xl text-[#5c3d2e] my-2 text-right">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-base leading-relaxed text-right">
//                   {feature.text}
//                 </p>
//               </div>
//               <div className="bg-[#a07353] flex items-center justify-center rounded-full w-24 h-24 shrink-0">
//                 <img src={feature.icon} alt={`icon-${index}`} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src="/src/assets/coffee.png"
//             alt="coffee"
//             className="w-full max-w-sm object-contain"
//           />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-12">
//           {featuresRight.map((feature, index) => (
//             <div key={index} className="flex gap-4 items-start">
//               <div className="bg-[#a07353] flex items-center justify-center rounded-full w-24 h-24 shrink-0">
//                 <img src={feature.icon} alt={`icon-${index + 3}`} />
//               </div>
//               <div>
//                 <h3 className="font-bold text-xl text-[#5c3d2e] my-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-base leading-relaxed">
//                   {feature.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCollection;


