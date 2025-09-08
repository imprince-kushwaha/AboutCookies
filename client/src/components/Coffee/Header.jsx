// This one is with hamburger
// import React, { useEffect, useState } from "react";
// import logo from "/src/assets/logo.png";
// import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
// import "primeicons/primeicons.css";
// import { useNavigate, useLocation } from "react-router-dom";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // const navigate = useNavigate();
//   // const location = useLocation();
//   const isAboutPage = location.pathname === "/about";

//   const menuItems = [
//     { label: "Home", path: "/" },
//     {
//       label: "Shop",
//       dropdown: [
//         { label: "Black Coffee", image: "/src/assets/Black Coffee.png" },
//         { label: "Frothy Coffee", image: "/src/assets/Frothy Coffee.png" },
//         { label: "Cappuccino", image: "/src/assets/Cappuccino.png" },
//         { label: "Iced Coffees", image: "/src/assets/Iced Coffees.png" },
//         { label: "Flavored Coffee", image: "/src/assets/Flavored Coffee.png" },
//         { label: "Cold Coffee", image: "/src/assets/Cold Coffee.png" },
//       ],
//     },
//     { label: "Best Sellers" },
//     { label: "About Us", path: "/about" },
//     { label: "Collections" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavigate = (path, label) => {
//     setActive(label);
//     if (path) {
//       navigate(path);
//       setMobileMenuOpen(false); // Close mobile menu on nav
//     }
//   };

//   return (
//     <>
//       <div
//         className={`fixed w-full z-50 transition-all duration-300 py-4 ${
//           scrolled || isAboutPage ? "bg-[#4b2e2a] shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex items-center justify-between text-white">
//           {/* === Mobile View (below md) === */}
//           <div className="flex w-full items-center justify-between md:hidden">
//             {/* Hamburger */}
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>

//             {/* Centered Logo */}
//             <div className="absolute left-1/2 transform -translate-x-1/2">
//               <img src={logo} alt="Logo" className="h-10" />
//             </div>

//             {/* Right-side icons */}
//             <div className="flex space-x-4 text-lg">
//               <span className="pi pi-search cursor-pointer"></span>
//               <span className="pi pi-heart cursor-pointer"></span>
//               <span className="pi pi-user cursor-pointer"></span>
//               <span className="pi pi-shopping-cart cursor-pointer"></span>
//             </div>
//           </div>

//           {/* === Desktop View (md and up) === */}
//           <div className="hidden md:flex w-full items-center justify-between">
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="h-12" />

//             {/* Nav Menu */}
//             <nav className="flex gap-8 relative">
//               {menuItems.map((item) => (
//                 <div
//                   key={item.label}
//                   onMouseEnter={() => item.dropdown && setShowDropdown(true)}
//                   onMouseLeave={() => item.dropdown && setShowDropdown(false)}
//                   className="relative"
//                 >
//                   <button
//                     onClick={() => handleNavigate(item.path, item.label)}
//                     className={`text-base font-medium transition duration-300 border-b-2 hover:border-white cursor-pointer ${
//                       active === item.label
//                         ? "border-white"
//                         : "border-transparent"
//                     }`}
//                   >
//                     {item.label}
//                     {item.dropdown && <FiChevronDown className="inline ml-1" />}
//                   </button>

//                   {/* Dropdown */}
//                   {item.dropdown && showDropdown && (
//                     <div className="absolute top-full left-0 mt-0.5 bg-white text-black shadow-lg rounded-md p-4 flex gap-6 z-50">
//                       {item.dropdown.map((sub, i) => (
//                         <div
//                           key={i}
//                           className="flex flex-col items-center w-28 hover:scale-105 transition-transform cursor-pointer"
//                           onClick={() => {
//                             setActive(item.label);
//                             setShowDropdown(false);
//                           }}
//                         >
//                           <img
//                             src={sub.image}
//                             alt={sub.label}
//                             className="w-20 h-20 object-cover rounded-full mb-2"
//                           />
//                           <span className="text-sm text-center font-medium">
//                             {sub.label}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Right Icons */}
//             <div className="flex space-x-4 text-white text-lg">
//               <span className="pi pi-search cursor-pointer"></span>
//               <span className="pi pi-heart cursor-pointer"></span>
//               <span className="pi pi-user cursor-pointer"></span>
//               <span className="pi pi-shopping-cart cursor-pointer"></span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* === Mobile Menu Dropdown === */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-16 left-0 w-full bg-[#4b2e2a] text-white px-6 py-4 z-40">
//           <ul className="flex flex-col gap-4">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <button
//                   onClick={() => handleNavigate(item.path, item.label)}
//                   className="text-lg font-medium"
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// works well
// import React, { useEffect, useState } from "react";
// import logo from "/src/assets/cuppanord-logo.png";
// import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
// import "primeicons/primeicons.css";
// import { useNavigate, useLocation } from "react-router-dom";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isAboutPage = location.pathname === "/about";

//   const menuItems = [
//     { label: "Home", path: "/" },
//     {
//       label: "Shop",
//       dropdown: [
//         { label: "Black Coffee", image: "/src/assets/Black Coffee.png" },
//         { label: "Frothy Coffee", image: "/src/assets/Frothy Coffee.png" },
//         { label: "Cappuccino", image: "/src/assets/Cappuccino.png" },
//         { label: "Iced Coffees", image: "/src/assets/Iced Coffees.png" },
//         { label: "Flavored Coffee", image: "/src/assets/Flavored Coffee.png" },
//         { label: "Cold Coffee", image: "/src/assets/Cold Coffee.png" },
//       ],
//     },
//     { label: "Best Sellers" },
//     { label: "About Us", path: "/about" },
//     { label: "Collections" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavigate = (path, label) => {
//     setActive(label);
//     if (path) {
//       navigate(path);
//       setMobileMenuOpen(false); // Close mobile menu on nav
//     }
//   };

//   return (
//     <>
//       <div
//         className={`fixed w-full z-50 transition-all duration-300 py-4 ${
//           scrolled || isAboutPage ? "bg-[#4b2e2a] shadow-lg" : `${mobileMenuOpen?"bg-[#4b2e2a]": "bg-transparent"}`
//         }`}
//       >
//         <div className="container mx-auto px-4 flex items-center justify-between text-white">
//           {/* === Mobile View (below md) === */}
//           <div className="flex items-center justify-between w-full md:hidden">
//             {/* Hamburger */}
//             <div>
//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//               </button>
//             </div>

//             {/* Centered Logo */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//               <img src={logo} alt="Logo" className="h-10" />
//             </div>

//             {/* Right-side icons (only Search + Cart) */}
//             <div className="flex space-x-4 text-lg">
//               <span className="pi pi-search cursor-pointer"></span>
//               <span className="pi pi-shopping-cart cursor-pointer"></span>
//             </div>
//           </div>

//           {/* === Desktop View (md and up) === */}
//           <div className="hidden md:flex w-full items-center justify-between">
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="h-12" />

//             {/* Nav Menu */}
//             <nav className="flex gap-8 relative">
//               {menuItems.map((item) => (
//                 <div
//                   key={item.label}
//                   onMouseEnter={() => item.dropdown && setShowDropdown(true)}
//                   onMouseLeave={() => item.dropdown && setShowDropdown(false)}
//                   className="relative"
//                 >
//                   <button
//                     onClick={() => handleNavigate(item.path, item.label)}
//                     className={`text-base font-medium transition duration-300 border-b-2 hover:border-white cursor-pointer ${
//                       active === item.label
//                         ? "border-white"
//                         : "border-transparent"
//                     }`}
//                   >
//                     {item.label}
//                     {item.dropdown && <FiChevronDown className="inline ml-1" />}
//                   </button>

//                   {/* Dropdown */}
//                   {item.dropdown && showDropdown && (
//                     <div className="absolute top-full left-0 mt-0.5 bg-white text-black shadow-lg rounded-md p-4 flex gap-6 z-50">
//                       {item.dropdown.map((sub, i) => (
//                         <div
//                           key={i}
//                           className="flex flex-col items-center w-28 hover:scale-105 transition-transform cursor-pointer"
//                           onClick={() => {
//                             setActive(item.label);
//                             setShowDropdown(false);
//                           }}
//                         >
//                           <img
//                             src={sub.image}
//                             alt={sub.label}
//                             className="w-20 h-20 object-cover rounded-full mb-2"
//                           />
//                           <span className="text-sm text-center font-medium">
//                             {sub.label}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Right Icons */}
//             <div className="flex space-x-4 text-white text-lg">
//               <span className="pi pi-search cursor-pointer"></span>
//               <span className="pi pi-heart cursor-pointer"></span>
//               <span className="pi pi-user cursor-pointer"></span>
//               <span className="pi pi-shopping-cart cursor-pointer"></span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* === Mobile Menu Dropdown === */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-16 left-0 w-full bg-[#4b2e2a] text-white px-6 py-4 z-40">
//           {/* <ul className="flex flex-col gap-4">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <button
//                   onClick={() => handleNavigate(item.path, item.label)}
//                   className="text-lg font-medium"
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul> */}

//           <ul className="flex flex-col gap-4">
//   {menuItems.map((item) => (
//     <li key={item.label}>
//       {item.dropdown ? (
//         <>
//           <button
//             onClick={() =>
//               setMobileDropdownOpen(
//                 mobileDropdownOpen === item.label ? null : item.label
//               )
//             }
//             className="text-lg font-medium flex justify-between w-full"
//           >
//             {item.label}
//             <FiChevronDown
//               className={`transform transition-transform ${
//                 mobileDropdownOpen === item.label ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {mobileDropdownOpen === item.label && (
//             <ul className="pl-4 mt-2 flex flex-col gap-2">
//               {item.dropdown.map((sub) => (
//                 <li key={sub.label}>
//                   <button
//                     onClick={() => {
//                       setActive(item.label);
//                       setMobileMenuOpen(false);
//                       setMobileDropdownOpen(null);
//                     }}
//                     className="text-base"
//                   >
//                     {sub.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </>
//       ) : (
//         <button
//           onClick={() => handleNavigate(item.path, item.label)}
//           className="text-lg font-medium"
//         >
//           {item.label}
//         </button>
//       )}
//     </li>
//   ))}
// </ul>

//           {/* Additional Mobile Icons */}
//           <div className="flex justify-start mt-6 space-x-6 text-xl">
//             <span className="pi pi-heart cursor-pointer"> Wishlist</span>
//             <span className="pi pi-user cursor-pointer"> User</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import logo from "/src/assets/cuppanord-logo.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "primeicons/primeicons.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false); // New state for mobile Shop submenu

  const navigate = useNavigate();
  const location = useLocation();
  const isAboutorContactPage = ["/about", "/contact"].includes(location.pathname);


  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Shop",
      dropdown: [
        { label: "Black Coffee", image: "/src/assets/Black Coffee.png" },
        { label: "Frothy Coffee", image: "/src/assets/Frothy Coffee.png" },
        { label: "Cappuccino", image: "/src/assets/Cappuccino.png" },
        { label: "Iced Coffees", image: "/src/assets/Iced Coffees.png" },
        { label: "Flavored Coffee", image: "/src/assets/Flavored Coffee.png" },
        { label: "Cold Coffee", image: "/src/assets/Cold Coffee.png" },
      ],
    },
    { label: "Collections" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path, label) => {
    setActive(label);
    if (path) {
      navigate(path);
      setMobileMenuOpen(false);
      setMobileShopOpen(false);
    }
  };

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setActive(currentItem.label);
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all duration-300 py-4 ${
          scrolled || isAboutorContactPage
            ? "bg-[#4b2e2a] shadow-lg"
            : `${mobileMenuOpen ? "bg-[#4b2e2a]" : "bg-transparent"}`
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-white">
          {/* Mobile View */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Hamburger */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md transition text-white hover:bg-white hover:text-[#4b2e2a]"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <img src={logo} alt="Logo" className="h-10" />
            </div>

            {/* Right-side icons (Search + Cart) */}
            <div className="flex space-x-4 text-lg">
              <span className="pi pi-search cursor-pointer"></span>
              <span className="pi pi-shopping-cart cursor-pointer"></span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-12" />

            {/* Nav Menu */}
            <nav className="flex gap-8 relative">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onMouseEnter={() => item.dropdown && setShowDropdown(true)}
                  onMouseLeave={() => item.dropdown && setShowDropdown(false)}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavigate(item.path, item.label)}
                    className={`text-base font-medium transition duration-300 border-b-2 hover:border-white cursor-pointer ${
                      active === item.label
                        ? "border-white"
                        : "border-transparent"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <FiChevronDown className="inline ml-1" />}
                  </button>

                  {/* Dropdown */}
                  {item.dropdown && showDropdown && (
                    <div className="absolute top-full left-0 mt-0.5 bg-white text-black shadow-lg rounded-md p-4 flex gap-6 z-50">
                      {item.dropdown.map((sub, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center w-28 hover:scale-105 transition-transform cursor-pointer"
                          onClick={() => {
                            setActive(item.label);
                            setShowDropdown(false);
                          }}
                        >
                          <img
                            src={sub.image}
                            alt={sub.label}
                            className="w-20 h-20 object-cover rounded-full mb-2"
                          />
                          <span className="text-sm text-center font-medium">
                            {sub.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex space-x-4 text-white text-lg">
              <span className="pi pi-search cursor-pointer"></span>
              <span className="pi pi-heart cursor-pointer"></span>
              <span className="pi pi-user cursor-pointer"></span>
              <span className="pi pi-shopping-cart cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#4b2e2a] text-white px-6 py-4 z-40 overflow-auto max-h-[calc(100vh-4rem)]">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => {
              if (item.label === "Shop") {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => setMobileShopOpen(!mobileShopOpen)}
                      className="flex items-center justify-between w-full text-lg font-medium"
                    >
                      {item.label}
                      <FiChevronDown
                        className={`ml-2 transition-transform duration-300 ${
                          mobileShopOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileShopOpen && (
                      <div className="mt-2 pl-4 grid grid-cols-2 gap-4">
                        {item.dropdown.map((sub, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => {
                              setActive(sub.label);
                              setMobileMenuOpen(false);
                              setMobileShopOpen(false);
                            }}
                          >
                            <img
                              src={sub.image}
                              alt={sub.label}
                              className="w-20 h-20 object-cover rounded-full mb-1"
                            />
                            <span className="text-sm text-center">
                              {sub.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              } else {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavigate(item.path, item.label)}
                      className="text-lg font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                );
              }
            })}
          </ul>

          {/* Additional Mobile Icons */}
          <div className="flex justify-start mt-6 space-x-6 text-xl">
            <span className="pi pi-heart cursor-pointer"> Wishlist</span>
            <span className="pi pi-user cursor-pointer"> User</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
