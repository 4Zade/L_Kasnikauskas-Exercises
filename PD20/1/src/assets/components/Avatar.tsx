import { FC } from 'react';
import { User } from '../../App.tsx';

interface Props {
    user: User;
  }

const Avatar: FC<Props> = ({ user }) => {
    return (
        <div className='w-full aspect-square relative overflow-hidden'>
            <img src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} className='absolute w-full h-auto top-0 left-0 object-cover' />
        </div>
    )
}

export default Avatar;