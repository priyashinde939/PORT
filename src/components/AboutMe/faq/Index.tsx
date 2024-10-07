
import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {


  const faqData = [
    {
      textHead: "How can we communicate?",
      textMsg: "Way to understand indeed.",
      textDesc: "You can always contact me at priya.shinde9390@gmail.com!",
    },
    {
      textHead: "Where am i currently work?",
      textMsg: "Work...",
      textDesc:
        "I'm a student, but always open to collaboration. Let me know if you're interested!",
    },
    {
      textHead: "What type of projects did you do?",
      textMsg: "Anything I could.",
      textDesc:
        "From dynamic e-commerce platforms to interactive web applications.",
    },
  ];

  return (
    <>
      <div className="w-full flex items-center font-arcane">
        <div className="flex flex-col items-center gap-4  w-full mt-[20%] lg:mt-[10%]">
          {faqData.map((data, index) => (
            <React.Fragment key={index}>
              <FaqCard data={data} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
