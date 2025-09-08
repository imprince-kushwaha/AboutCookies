import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";

const ContactPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [comment, setComment] = useState("");

  const ourContactInfo = [
    {
      icon: <FaLocationDot size={24} />,
      heading: "MAIN OFFICE",
      text: "A-36, Block A, Sector 67, Noida, Uttar Pradesh 201309",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      heading: "CALL US TODAY!",
      text: "+91 1234567890",
    },
    {
      icon: <IoIosMail size={24} />,
      heading: "EMAIL",
      text: "testmail@gmail.com",
    },
    {
      icon: <FaClock size={24} />,
      heading: "HOURS",
      text: "7 Days a week, 10:00 am to 6:00 pm",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-gray-800 mt-16 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2b1b14]">
          Contact Us
        </h2>
        <p className="text-lg mt-2">Welcome to Cuppanord Coffee</p>
      </div>

      {/* Image + Form Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <img
            src="/src/assets/contact-lay-img.png"
            alt="Contact Img"
            className="w-full  h-[400px] md:h-[700px] object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#2b1b14]">
            We'd Love To Hear From You!
          </h2>
          <p className="text-base text-gray-600">
            Have any questions or comments? Feel free to contact us! Please
            allow us 1–2 business days to get back to you.
          </p>

          <form>
            <FloatLabel>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="custom-input"
              />
              <label htmlFor="username">Username</label>
            </FloatLabel>

            <FloatLabel>
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-input"
              />
              <label htmlFor="email">Email</label>
            </FloatLabel>

            <FloatLabel>
              <InputNumber
                id="phone"
                value={phoneNumber}
                onValueChange={(e) => setPhoneNumber(e.value)}
                inputClassName="custom-input"
                useGrouping={false} // prevents comma formatting
              />
              <label htmlFor="phone">Phone Number</label>
            </FloatLabel>

            <FloatLabel>
              <InputTextarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="custom-input"
              />
              <label htmlFor="comment">Comment</label>
            </FloatLabel>

            <Button
              label="Submit"
              className="mt-4 w-full custom-button"
              //  sm:w-auto
            />
          </form>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {ourContactInfo.map((info, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-center items-center w-12 h-12 mx-auto mb-3 bg-[#a07353] text-white rounded-full">
              {info.icon}
            </div>
            <h4 className="text-lg font-semibold mb-1">{info.heading}</h4>
            <p className="text-sm text-gray-600">{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
