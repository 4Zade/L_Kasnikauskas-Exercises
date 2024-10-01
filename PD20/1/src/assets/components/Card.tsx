import { FC } from 'react';
import Avatar from './Avatar.tsx';
import Intro from './Intro.tsx';
import SkillList from './SkillList.tsx';
import { User } from '../../App.tsx';

interface Props {
  user: User;
}

const Card: FC<Props> = ({ user }) => {
  return (
    <main className={`w-96 h-[40rem] bg-slate-100 rounded-md overflow-hidden outline outline-4 outline-gray-500 hover:scale-105 transition-transform ${!user.available ? 'saturate-0' : ''}`}>
      <Avatar  user={user}/>
      <section className='p-4'>
        <Intro user={user}/>
        <SkillList skills={user.skills}/>
      </section>
    </main>
  )
}

export default Card;
