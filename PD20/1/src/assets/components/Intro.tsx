import { FC } from 'react';
import { User } from '../../App.tsx';

interface Props {
    user: User;
  }

const Intro: FC<Props> = ({ user }) => {
    return (
        <div className='text-black'>
            <h1 className='text-2xl font-bold'>{user.firstName} {user.lastName}</h1>
            <p className='p-1 text-sm'>{user.about}</p>
        </div>
    )
}

export default Intro;