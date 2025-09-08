import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#360a03] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3">
            Subscribe Newsletter
          </h2>

          <p className="text-white text-base md:text-lg mb-6">
            Subscribe to our mailing list for product launches and offers!
          </p>

          <form className="relative w-full max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 pr-12 rounded-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white bg-[#360a03] p-3 rounded-xl transition cursor-pointer"
            >
              <FiArrowRight size={25} />
            </button>
          </form>
        </div>
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-20 mt-12 justify-center text-center">
          {/* Column 1 - Quick Links */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Contact Us", "FAQ", "Blog"].map(
                (item, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2 - Shop */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-lg font-semibold">Shop</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Cold Coffee",
                "Flavored Coffee",
                "Instant Coffee",
                "Iced Coffees",
                "Black Coffee",
                "Frothy Coffee",
              ].map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - About + Social */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-lg font-semibold">We Are Cuppanord</h2>
            <p className="text-sm mb-6 max-w-sm leading-relaxed text-gray-300">
              We are a team of designers and developers creating high-quality
              products and premium experiences for coffee lovers.
            </p>
            <div className="flex space-x-4">
              <FaFacebookF
                className="hover:text-[#a07353] hover:bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 border-2 hover:border-none rounded-full p-1.5"
                size={35}
              />
              <FaInstagram
                className="hover:text-[#a07353] hover:bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 border-2 hover:border-none rounded-full p-1.5"
                size={35}
              />
              <FaTwitter
                className="hover:text-[#a07353] hover:bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 border-2 hover:border-none rounded-full p-1.5"
                size={35}
              />
              <FaPinterest
                className="hover:text-[#a07353] hover:bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 border-2 hover:border-none rounded-full p-1.5"
                size={35}
              />
            </div>
          </div>

          {/* Column 4 - Information */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-lg font-semibold">Information</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Terms of Service",
                "Return Policy",
                "Shipping",
                "Privacy",
                "Compare",
              ].map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Support */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-lg font-semibold">Support</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">
                Contact: (123) 456-6549
              </li>
              <li className="hover:underline cursor-pointer">
                Email: test@gmail.com
              </li>
              <li>
                <span className="hover:underline cursor-pointer">
                  Do Not Sell My Personal Information
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
