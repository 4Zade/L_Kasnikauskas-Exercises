import { FC } from 'react';
import { SkillProp } from './Card';
import Skill from './Skill';

interface Props {
    skills: SkillProp[];
  }

const SkillList: FC<Props> = ({skills}) => {
    return (
        <div className='mt-4'>
            <ul className='flex flex-wrap gap-1'>
                {skills.map((skill, index) => (
                    <Skill key={index} skill={skill}/>
                ))}
            </ul>
        </div>
    )
}

export default SkillList;