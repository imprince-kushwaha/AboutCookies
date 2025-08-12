import React, { useState, useEffect } from "react";
import axios from "axios";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cookies/check", { withCredentials: true })
        // withCredentials: true	Sends cookies with cross-origin requests
      .then((res) => {
        if (!res.data.consent) {
          setShow(true);
          setTimeout(() => setVisible(true), 50);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleConsent = (choice) => {
    axios
      .post(
        "http://localhost:5000/api/cookies/set",
        { consent: choice },
        { withCredentials: true }
      )
      .then(() => {
        setVisible(false), setTimeout(() => setShow(false), 300);
      })
      .catch((err) => console.error(err));
  };

  if (!show) return null;

  return (
    // <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-200 border-t border-gray-200">
    <div
      className={`fixed bottom-0 left-0 z-50 w-full bg-gray-200 border-t border-gray-200 transform transition-all duration-2000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Text */}
        <div className="text-sm text-gray-600 flex-1">
          <h2 className="font-semibold text-gray-900 mb-1">
            🍪 We use cookies!
          </h2>
          <p className="mt-1">
            We use our own cookies as well as third-party cookies to enhance
            your experience, analyze our traffic, and for security and
            marketing. Select <strong>"Accept all"</strong> to allow them to be
            used. For more information, visit{" "}
            <a href="/" className="underline text-blue-600">
              Cookie Settings
            </a>{" "}
            and{" "}
            <a href="/" className="underline text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="text-sm text-gray-700 underline hover:text-blue-700 cursor-pointer">
            Manage settings
          </button>
          <button
            onClick={() => handleConsent("rejected")}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            Block all cookies
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Accept all
          </button>
          <button
            onClick={() => setShow(false)}
            className="p-2 text-gray-500 hover:text-gray-800"
          >
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
