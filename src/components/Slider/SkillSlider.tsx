import Image from 'next/image';
import { InfiniteSlider } from './Slider';

const images = [
  { id: 1, src: '/images/logo/3.png', alt: 'img' },
  { id: 2, src: '/images/logo/10.png', alt: 'img' },
  { id: 3, src: '/images/logo/5.png', alt: 'img' },
  { id: 4, src: '/images/logo/6.png', alt: 'img' },
  { id: 5, src: '/images/logo/7.png', alt: 'img' },
  { id: 6, src: '/images/logo/mysql.svg', alt: 'img' },
  { id: 7, src: '/images/logo/1.png', alt: 'img' },
  { id: 9, src: '/images/logo/android-studio.svg', alt: 'img' },
  { id: 10, src: '/images/logo/git.svg', alt: 'img' },
  { id: 11, src: '/images/logo/npm.svg', alt: 'img' },
  { id: 12, src: '/images/logo/ps.svg', alt: 'img' },
  { id: 13, src: '/images/logo/2.png', alt: 'img' },
  { id: 14, src: '/images/logo/8.png', alt: 'img' },
  { id: 15, src: '/images/logo/bootstrap.svg', alt: 'img' },
  { id: 16, src: '/images/logo/9.png', alt: 'img' },
  { id: 17, src: '/images/logo/css3.svg', alt: 'img' },
  { id: 18, src: '/images/logo/nextjs.svg', alt: 'img' },
  { id: 19, src: '/images/logo/framer-motion.svg', alt: 'img' }

];

export function SkillSlider() {
  return (
    <InfiniteSlider gap={70} reverse>
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt="img"
          width={80}
          height={40}
        />
      ))}
    </InfiniteSlider>
  );
}
