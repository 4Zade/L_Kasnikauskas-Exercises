import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu: FC = () => {
    const location = useLocation();
    const routeName = location.pathname.split('/')[1];

    return (
        <>
            <h1 className='text-3xl font-bold text-white'>{routeName} page!</h1>

            <ul className='flex gap-10'>
                <li>
                    <Link to="/home">Home</Link>
                </li>

                <li>
                    <Link to="/menu">Menu</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;