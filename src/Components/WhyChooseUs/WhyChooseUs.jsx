import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Wide Range of Products",
      description:
        "Explore a diverse collection of sports equipment tailored to every need. From beginners to pros, Sportify has you covered!",
      bgImg: "https://images.unsplash.com/photo-1599236755629-17aff66ccda0?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: "lg:col-span-6",
    },
    {
      title: "High Performance Guaranteed",
      description:
        "Our products are designed for durability and performance. Trust Sportify to elevate your fitness and sporting experience.",
      bgImg: "https://images.unsplash.com/photo-1660211983492-9df0c82ba9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNwb3J0JTIwZXF1aXBtZW50fGVufDB8fDB8fHww",
      colSpan: "lg:col-span-6",
    },
    {
      title: "Nationwide Delivery",
      description:
        "Sportify ensures safe and timely delivery to all corners of Bangladesh. Your equipment, right at your doorstep!",
      bgImg: "https://plus.unsplash.com/premium_photo-1733288427325-f43bc7f0e758?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      colSpan: "lg:col-span-4",
    },
    {
      title: "Exceptional Customer Support",
      description:
        "Our customer service team is here to assist you with any queries or issues, ensuring a seamless shopping experience.",
      bgImg: "https://plus.unsplash.com/premium_photo-1661816354638-d575287bf82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNwb3J0JTIwZXF1aXBtZW50fGVufDB8fDB8fHww", 
      colSpan: "lg:col-span-4", 
    },
    {
      title: "Top Quality Standards",
      description:
        "Every product at Sportify is curated for excellence, ensuring value and satisfaction for our customers.",
      bgImg: "https://images.unsplash.com/photo-1625834317364-b32c140fd360?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNwb3J0JTIwZXF1aXBtZW50fGVufDB8fDB8fHww",
      colSpan: "lg:col-span-4",
    },
  ];

  return (
    <div className="py-12 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-span-12 sm:col-span-6 ${feature.colSpan} relative group rounded-lg shadow-lg overflow-hidden`}
            >
              <img
                src={feature.bgImg}
                alt={feature.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
