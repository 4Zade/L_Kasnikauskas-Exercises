import { FC } from 'react';
import { SkillProp } from './Card';
import { Icon } from '@iconify/react';


interface Props {
    skill: SkillProp;
  }
const Skill: FC<Props> = ({skill}) => {
    const skillClass = `py-1 px-2 flex items-center gap-1 rounded-md select-none ${skill.color}`;
    const skillIcon = `tabler:${skill.icon}`;

    return (
        <div className={skillClass}>
            <Icon icon={skillIcon} className='w-4 h-4'/>
            <h1 className='text-xs'>{skill.name}</h1>
        </div>
    )
}

export default Skill;