import React from 'react';
import FooterMarquee from './FooterMarquee';


const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-12 h-[100vh] ">

      <div className=" w-full mx-auto px-6 md:px-12">
        <div className="flex flex-row md:flex-row place-content-between justify-between items-start md:items-center mx-14">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <img src="images/git.svg" alt="Format-3 Logo" className="w-32" />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-40  md:flex md:gap-12 text-white text-end text-xl">
            <div>
              <h3 className=" text-gray-400 mb-3">Company</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Curiosity</a></li>
              </ul>
            </div>
            <div>
              <h3 className=" text-gray-400 mb-3">Work</h3>
              <ul>
                <li><a href="#" className="hover:underline">Our Work</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className=" text-gray-400 mb-3">Socials</h3>
              <ul>
                <li><a href="#" className="hover:underline">Behance</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="my-14 flex- justify-center content-center align-top pb-3 pt-2 border-y border-zinc-800">
        <FooterMarquee />
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex justify-between mt-16 text-zinc-500 mx-14 my-20 font-sans ">
          <p className="font-semibold text-xl">© 2024, Format-3. All Rights Reserved.</p>
          <a href="#" className="hover:text-zinc-500 text-3xl text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};









export default Footer;