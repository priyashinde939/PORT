import { motion } from 'framer-motion';

const Two: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-black">
            <motion.img 
                src="./images/glow.png"
                alt="img" 
                width={200}
                className="relative"
                animate={{
                    x: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500],
                    y: [0, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0]
                }}
                transition={{
                    duration: 6,
                    ease: 'linear',
                    repeat: Infinity
                }}
            />
        </div>
    );
};

export default Two;
