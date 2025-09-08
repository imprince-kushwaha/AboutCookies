import React from "react";

const AboutPage = () => {
  const stats = [
    {
      number: "500+",
      title: "Products for Sale",
      desc: "A diverse range of products that cater to all styles.",
    },
    {
      number: "4500+",
      title: "Happy Customers",
      desc: "Great products and experiences with our customers.",
    },
    {
      number: "100+",
      title: "Partner Brands",
      desc: "We partner with brands that share our values.",
    },
  ];

  const whyChoose = [
    {
      img: "/src/assets/about-choose-1.png",
      title: "Unique Coffee Origins",
      desc: "Appealing to enthusiasts seeking distinctive and memorable experiences.",
    },
    {
      img: "/src/assets/about-choose-2.png",
      title: "Daily Dose of Delicious",
      desc: "Enjoyment and the routine of coffee consumption emphasized.",
    },
    {
      img: "/src/assets/about-choose-3.png",
      title: "Freshly Roasted",
      desc: "Rich sensory experience with freshly roasted flavor and aroma.",
    },
  ];

  const ourTeam = [
    {
      name: "Arthur",
      role: "Product Designer",
      img: "/src/assets/about-team-img-1.png",
    },
    {
      name: "Isla",
      role: "Director",
      img: "/src/assets/about-team-img-2.png",
    },
    {
      name: "Adam",
      role: "Marketing Manager",
      img: "/src/assets/about-team-img-3.png",
    },
    {
      name: "Alina",
      role: "Assistant Manager",
      img: "/src/assets/about-team-img-4.png",
    },
  ];
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-gray-800 mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2b1b14]">
          About Us
        </h2>
        <p className="text-base sm:text-lg">Welcome to Cuppanord Coffee</p>
      </div>

      {/* Banner Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#2b1b14]">
          Perfect Store Available to Everyone!
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-sm sm:text-base text-gray-600">
          With over 10 years of experience, we have meticulously curated
          collections that transcend fleeting trends, embodying timeless
          elegance that resonates with our discerning clientele.
        </p>
        <img
          src="/src/assets/about-banner.png"
          alt="About Banner"
          className="w-full max-w-[95rem] mx-auto rounded-lg shadow-md"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mb-16">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b14]">
              {stat.number}
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2b1b14]">
              {stat.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-16 max-w-screen-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#2b1b14]">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-4 w-96 h-96 md:w-full md:h-full rounded-xl shadow"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#2b1b14]">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {ourTeam.map((member, i) => (
            <div key={i}>
              <img
                src={member.img}
                alt={member.name}
                className="mb-4 w-48 h-48 md:w-36 md:h-36 lg:w-[40vw] lg:h-[40vh] mx-auto object-cover shadow"
              />
              <h3 className="text-base sm:text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
