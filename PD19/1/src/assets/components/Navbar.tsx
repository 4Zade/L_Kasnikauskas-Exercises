import { FC } from 'react';

interface Props {
    Name: string
}

const Navbar: FC<Props> = ({Name}) => {
    return (
        <>
            <nav className='w-full h-16 bg-slate-900 p-2'>
                <h1 className="text-white text-3xl font-bold">{Name}</h1>
            </nav>
        </>
    )
}

export default Navbar;