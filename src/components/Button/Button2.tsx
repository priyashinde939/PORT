
import styles from './Button2.module.scss';


interface ButtonProps {
  bgColor?: string;
  hoverBgColor?: string;
  text: string;
}

function Button2({ bgColor, hoverBgColor, text }: ButtonProps) {
  return (
    <div 
      className={` section w-fit sm:w-fit px-6 py-[1vh] border-[1.5px] border-[#ffffff88] 
      rounded-3xl ${bgColor} transition-colors duration-300 hover:${hoverBgColor}`}
    >
      <div 
        className={`${styles.masker} flex items-center gap-1 overflow-hidden 
        relative`}
      >
        <span 
          className={`${styles.spanMask} text-[3vh] capitalize tracking-normal font-bold`}
        >
          {text}
        </span>
      </div>         
    </div>
  );
}


export default Button2;
