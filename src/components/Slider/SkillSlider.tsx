import Image from 'next/image';
import { InfiniteSlider } from './Slider';

export function SkillSlider() {
  return (
    <InfiniteSlider gap={70} reverse>
      <Image
        src='/images/logo/apple_music_logo.svg'
        alt='Apple Music logo'
        width={120}  // Specify width
        height={120} // Specify height
      />
      <Image
        src='/images/logo/chrome_logo.svg'
        alt='Chrome logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/strava_logo.svg'
        alt='Strava logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/nintendo_logo.svg'
        alt='Nintendo logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/jquery_logo.svg'
        alt='Jquery logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/prada_logo.svg'
        alt='Prada logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/apple_music_logo.svg'
        alt='Apple Music logo'
        width={120}
        height={120}
      />
      <Image
        src='/images/logo/chrome_logo.svg'
        alt='Chrome logo'
        width={120}
        height={120}
      />
    </InfiniteSlider>
  );
}
