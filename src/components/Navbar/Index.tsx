import styles from './style.module.scss';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { RiMenu3Fill } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    console.log(previous, latest);

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`${styles.header} w-full px-4 py-4 sm:px-8 sm:py-6 fixed`}>
      <div className="logo z-[9] px-12 ">
        <svg width="62" height="40" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <image href="/asteron1.svg" x="0" y="0" width="62" height="40" />
        </svg>
      </div>
      <div className="hidden  links sm:flex gap-6 items-center z-[9] px-12 py-2 ">
        {[ "Contact", "Home"].map((item, index) => (
          <h4 key={index} className={`${styles.heading4} relative font-medium text-[.7vw] sm px-[18px]
          py-[8px] border-[1px] border-[#ffffff] rounded-[50px] overflow-hidden `}>
            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <div className={`${styles.atag} text-white`}>{item}</div>
            </Link>
          </h4>
        ))}
      </div>
      <div className='inline-block sm:hidden'>
        <RiMenu3Fill size={22} />
      </div>
    </motion.div>
  )
}

export default Navbar;
