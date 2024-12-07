import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Sportify?",
      answer:
        "Sportify is your one-stop destination for authentic sports equipment, delivering quality products all over Bangladesh.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes, we deliver all over Bangladesh. Enjoy a seamless shopping experience from any location.",
    },
    {
      question: "What kind of warranty do you provide?",
      answer:
        "All our products come with an extensive warranty to ensure your satisfaction and peace of mind.",
    },
  ];

  return (
    <div className="py-12 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200">
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0} 
              />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
