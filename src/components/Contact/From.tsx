import React, { useState } from "react";
import { motion } from 'framer-motion';
import AnimatedButton from "./ContaxtButton";
// import styles from './Form.module.css'
// import clsx from 'clsx'

const Form: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    enquiry: "",
    message: "", 
  });

  const [showEnquirySection, setShowEnquirySection] = useState(false); // State to manage showing the enquiry section


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> // Include HTMLSelectElement here
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Project / General
  const handleGeneralClick = () => {
    setShowEnquirySection(true); // Show "General" 
  };

  const handleProjectClick = () => {
    setShowEnquirySection(false); //  show "Project" 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (sending to backend)
    console.log("Form Data Submitted:", formData, "Selected Options:", selectedOptions);
  };

  // select price 
  const [price, setPrice] = useState<string | null>(null)
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value)
  }


  return (
    <div className=" flex flex-col items-center py-24 mx-14 my-7 px-32 sm:px-5 sm:mx-2 bg-white text-black rounded-[2rem]">
      <div className="flex text-[3vw] sm:text-xl place-content-between w-full my-7 gap-10 ">
        <h1 className="font-normal mb-4">Brief us on what you need...</h1>
        <div className="flex gap-3">
          <h1
            className={` cursor-pointer ${
              !showEnquirySection ? "text-black" : "text-gray-400"
            }`}
            onClick={handleProjectClick}
          >
            Project
          </h1>
          <span className="text-gray-400 mx-1  cursor-pointer">/</span>
          <span
            className={` cursor-pointer ${
              showEnquirySection ? "text-black" : "text-gray-400"
            }`}
            onClick={handleGeneralClick}
          >
            General
          </span>
        </div>
      </div>

      {/* Conditionally render options or nothing, based on the enquiry section visibility */}
      {!showEnquirySection && (
          <div className="flex flex-wrap mb-6">
          {[
            "Website",
            "Mobile App",
            "Desktop App",
            "3D Design",
            "Visual Design",
            "Strategy",
            "Branding",
            "Illustration",
          ].map((option) => (
            <motion.button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`p-4 m-2 rounded-full text-2xl border border-zinc-200`}
              initial={{ backgroundColor: selectedOptions.includes(option) ? "#1e293b" : "#ffffff" }}
              animate={{
                backgroundColor: selectedOptions.includes(option) ? "#000000" : "#ffffff",
                color: selectedOptions.includes(option) ? "#ffffff" : "#000000",
                borderColor: selectedOptions.includes(option) ? "#ffffff" : "#e4e4e7",
              }}
              whileHover={{
                borderColor: "#a1a1aa",
                backgroundColor: "#e4e4e7",
              }}
              transition={{ duration: 0.3 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
      )}

      <form className="flex flex-col w-full " onSubmit={handleSubmit}>
        {/* Toggle visibility */}

        {showEnquirySection && (
          <div className="mb-4">
                <label htmlFor="website" className="block mb-2 font-medium text-slate-800 text-lg">
                  Tell us what your enquiry relates to
                </label>
                <select
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}  
                  onChange={handleInputChange}  
                  className={`p-3 w-full h-[10vh] min-h-[50px] border border-blue-800 text-xl rounded-3xl text-neutral-400 font-medium`}
                  >
                  <option value="" disabled hidden>Select a topic</option>  
                  <option value="Ui/Ux design" className="my-6 text-zinc-700">Ui/Ux design</option>
                  <option value="Fack-End" className="my-6 text-zinc-700">Front-End</option>
                  <option value="Back-End" className="my-6 text-zinc-700">Back-End</option>
                  <option value="Reactjs" className="my-6 text-zinc-700">Reactjs</option>
                  <option value="Nextjs" className="my-6 text-zinc-700">Nextjs</option>
                  <option value="ello" className="my-6 text-zinc-700">ello</option>
                </select>
          </div>
        )}

        <h1 className="text-[3vw] sm:text-xl  my-7">Introduce Yourself</h1>

        {/*  visible */}
        <div className="w-full flex flex-row sm:flex-col gap-24 text-lg">
          <div className="basis-1/2 flex flex-col gap-5">
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2 font-medium text-slate-800">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-3 py-6 font-medium border rounded-3xl"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-slate-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-6 font-medium border rounded-3xl"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block mb-2 font-medium text-slate-800">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full px-3 py-6 font-medium border rounded-3xl"
              />
            </div>
            
            <div className="mb-4">
                <label htmlFor="website" className="block mb-2 font-medium text-slate-800">
                  Website
                </label>
                <select
                  id="website"
                  name="website"
                  value={formData.website}  
                  onChange={handleInputChange}  
                  className="w-full px-3 py-6 font-medium border text-lg rounded-3xl text-neutral-400 "
                  >
                  <option value="" disabled hidden>Select a price range</option>  
                  <option value="100$- 200$" className="my-6 text-zinc-700">100$ - 200$</option>
                  <option value="200$- 400$" className="my-6 text-zinc-700">200$ - 400$</option>
                  <option value="400$- 700$" className="my-6 text-zinc-700">400$ - 700$</option>
                </select>
            </div>
          </div>

          <div className="basis-1/2 min-h-full flex flex-col gap-10">
            {/* Message field */}
            <div className="mb-4 h-[90%]">
              <label htmlFor="message" className="block mb-2 font-medium text-slate-800">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter Your Message Here"
                className="w-full mb-4 border rounded-3xl h-full px-3 py-6 font-medium text-lg"
                required
              />
            </div>
            <div className="my-4 h-[10%] text-neutral-400">
  Please read our
  <a
    href="/privacy-policy"
    className="underline text-neutral-500 hover:text-neutral-700 pl-1"
  >

    privacy policy
  </a>{" "}
  and
  <a
    href="/cookies-policy"
    className="underline text-neutral-500 hover:text-neutral-700 pl-1"
  >

    cookies policy
  </a>{" "}
  so you understand how we collect and use your personal data.
</div>
          </div>

        </div>

        <div className="w-full flex gap-10 place-content-between mt-10">
                <div className=" text-2xl my-10  text-zinc-400">
                    All set and filled? Email address looking good?
                </div>
                <AnimatedButton />
        </div>

      </form>
    </div>
  );
};

export default Form;
