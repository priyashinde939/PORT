import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button2.module.scss';


import PropTypes from 'prop-types';

function Button2({bgColor, text}:{bgColor:string; text:string}) {
  return (
    <div 
      className={`${bgColor} section w-fit sm:w-fit px-6 
      py-[1vh] border-[1px] rounded-3xl`}
    >
      <div 
        className= {`${styles.masker} flex items-center gap-1 overflow-hidden 
        relative cursor-pointer`}
      >
        <span 
          className={`${styles.spanMask} text-[3vh] 
          capitalize tracking-normal
          font-bold`}
        >
          {text}
        </span>
        {/* <LuArrowUpRight 
          style={{
            fontSize: "24px", 
            color: "white", 
          }} 
          className={`${styles.iconMask}`} 
        />  */}
        </div>         
    </div>
  )
}

Button2.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button2