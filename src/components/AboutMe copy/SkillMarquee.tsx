import { InfiniteSlider } from '../Slider/Slider';

export function SkillMarquee() {
  const skills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "React", 
    "NodeJS", 
    "NextJS", 
    "Git & GitHub", 
    "VS Code"
  ];

  return (
    <InfiniteSlider gap={40} reverse>
      {skills.map((skill, index) => (
        <div key={index} className='h-[60px] w-auto flex items-center px-3  rounded-sm border border-[#bf2929]'>
          <div className="px-3 text-3xl font-bold text-white ">{skill}</div>
        </div>
      ))}
    </InfiniteSlider>
  );
}
