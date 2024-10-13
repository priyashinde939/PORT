import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button2.module.scss';
import PropTypes from 'prop-types';

interface ButtonProps {
  bgColor?: string;
  hoverBgColor?: string;
  text: string;
}

function Button2({ bgColor, hoverBgColor, text }: ButtonProps) {
  return (
    <div 
      className={` section w-fit sm:w-fit px-6 py-[1vh] border-[1.5px] border-[#db3030af] 
      rounded-3xl ${bgColor} transition-colors duration-300 hover:${hoverBgColor}`}
    >
      <div 
        className={`${styles.masker} flex items-center gap-1 overflow-hidden 
        relative cursor-pointer`}
      >
        <span 
          className={`${styles.spanMask} text-[3vh] capitalize tracking-normal font-bold`}
        >
          {text}
        </span>
        {/* <LuArrowUpRight 
          style={{
            fontSize: "24px", 
            color: "white", 
          }} 
          className={`${styles.iconMask}`} 
        /> */}
      </div>         
    </div>
  );
}

Button2.propTypes = {
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button2;
