import React, { useState } from "react";

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
    <div className="flex flex-col items-center p-8 mx-10 my-20 px-20 sm:px-5 sm:mx-2 bg-white text-black rounded-[3rem]">
      <div className="flex text-[3vw] sm:text-xl place-content-between w-full my-7 gap-10 ">
        <h1 className="font-medium mb-4">Brief us on what you need...</h1>
        <div className="flex gap-3">
          <h1
            className={`font-medium cursor-pointer ${
              !showEnquirySection ? "text-black" : "text-gray-300"
            }`}
            onClick={handleProjectClick}
          >
            Project
          </h1>
          <span className="text-gray-300 font-medium cursor-pointer">/</span>
          <span
            className={`ml-2 font-medium cursor-pointer ${
              showEnquirySection ? "text-black" : "text-gray-300"
            }`}
            onClick={handleGeneralClick}
          >
            General
          </span>
        </div>
      </div>

      {/* Conditionally render options or nothing, based on the enquiry section visibility */}
      {!showEnquirySection && (
        <div className="flex flex-wrap justify-center mb-6">
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
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`p-4 m-3 rounded-full text-2xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-200 hover ${
                selectedOptions.includes(option)
                  ? "bg-slate-950 text-white"
                  : "bg-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      <form className="flex flex-col w-full " onSubmit={handleSubmit}>
        {/* Toggle visibility */}

        {showEnquirySection && (
          <div className="mb-4">
            <label htmlFor="enquiry" className="block mb-2 font-medium text-slate-800">Your Enquiry</label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleInputChange}
              placeholder="Your Enquiry"
              className="w-full p-2 mb-4 border rounded-md"
              required
            />
          </div>
        )}

        <h1 className="text-[3vw] sm:text-xl font-medium my-7">Introduce Yourself</h1>

        {/*  visible */}
        <div className="w-full flex flex-row sm:flex-col gap-9 text-lg">
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
                className="w-full p-3 border rounded-3xl"
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
                className="w-full p-3 border rounded-3xl"
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
                className="w-full p-3 border rounded-3xl"
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
                  className="p-3 border rounded-3xl text-neutral-400"
                  >
                  <option value="" disabled hidden>Select a price range</option>  
                  <option value="100$- 200$" className="text-black">100$ - 200$</option>
                  <option value="200$- 400$" className="text-black">200$ - 400$</option>
                  <option value="400$- 700$" className="text-black">400$ - 700$</option>
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
                placeholder="Your Message"
                className="w-full p-3 pb-10 mb-4  border rounded-3xl h-full"
                required
              />
            </div>
            <div className="my-4 h-[10%]">
            Please read our privacy policy and cookies policy so you understand how we collect and use your personal data.
            </div>
          </div>

        </div>

        <div className="w-full flex gap-10 place-content-between mt-10">
                <div className=" text-2xl my-10  text-zinc-400">
                    All set and filled? Email address looking good?
                </div>
                <button
                  type="submit"
                  className=" px-20 py-3 my-10  bg-black text-white font-medium text-2xl rounded-full hover:bg-gray-800">
                  Send
                </button>
        </div>

      </form>
    </div>
  );
};

export default Form;
