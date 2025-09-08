import React from "react";

const CustomerFeedback = () => {
  const feedback = [
    {
      rating: 5,
      title: "Best coffee I’ve ever had!",
      content:
        "Absolutely loved the rich, smooth flavor. You can really tell it's freshly roasted. Will definitely be coming back.",
      author: "Emily R.",
      reviewer_from: "San Francisco, CA",
    },
    {
      rating: 4,
      title: "Best Online Coffee Beans Shop",
      content:
        "I always find something stylish and affordable on this web Coffee Beans site.",
      author: "Jake M.",
      reviewer_from: "New York, NY",
    },
    {
      rating: 5,
      title: "Exceptional quality",
      content:
        "The beans are organic and ethically sourced. You can taste the quality in every cup.",
      author: "Priya S.",
      reviewer_from: "Toronto, Canada",
    },
    {
      rating: 3,
      title: "Good, but room for improvement",
      content:
        "Coffee was decent but not very hot. The staff were friendly though, so that made up for it.",
      author: "Liam K.",
      reviewer_from: "Austin, TX",
    },
    {
      rating: 5,
      title: "Highly recommend!",
      content:
        "I’ve been searching for good espresso and finally found it here. Smooth, strong, and flavorful.",
      author: "Sara B.",
      reviewer_from: "Chicago, IL",
    },
    {
      rating: 4,
      title: "Really nice place to chill",
      content:
        "Perfect for working remotely or hanging out. Great coffee and pastries too.",
      author: "David N.",
      reviewer_from: "London, UK",
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-[#f9f4f0] py-16" 
      style={{ backgroundImage: "url('/src/assets/testimonial-image.png')" }}
    
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b1b14]">
          Happy Customers
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Hear what they say about us
        </p>
      </div>

      {/* Feedback Grid */}
      <div className="max-w-10/12 mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {feedback.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-2">{renderStars(item.rating)}</div>
              <h3 className="font-semibold text-lg text-[#5c3d2e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.content}</p>
              <div className="text-sm font-medium text-[#2b1b14]">
                {item.author}
              </div>
              <div className="text-sm text-gray-500">{item.reviewer_from}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
