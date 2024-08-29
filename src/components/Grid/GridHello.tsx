// components/BentoGrid.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
  items: { id: number; title: string; image: string }[];
}

const GridHello: FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="relative overflow-hidden rounded-lg shadow-lg bg-slate-400 h-full w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-white text-lg font-semibold">{item.title}</h2>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default GridHello;
