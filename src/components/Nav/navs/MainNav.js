import React, { useEffect, useState } from 'react';
import './nav-styles/main-nav-styles.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Roles from '../../../utils/Roles';

const MainNav = () => {

    const { logout_user } = useAuth();
    const { user } = useAuth();

    const navigate = useNavigate();

    const [loggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll([".links>li>a"]);
        links.forEach((link) => {
            link.addEventListener('click', () => {
                link.classList.add('active');
            });
        });
    }, []);

    return (
        <nav className='main-nav'>

            <div className='navbar-brand'>
                <h1>
                    <Link to={'/'}>Syncro</Link>
                </h1>
            </div>

            <nav>
                <ul className='links'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/shopping'}>Shop</Link>
                    </li>

                    <li>
                        <Link to={'/housing'}>Housing</Link>
                    </li>

                    {
                        user?.roles?.includes(Roles.ADMIN)
                        ?
                        <li>
                            <Link to={'/admin'}>Admin</Link>
                        </li>
                        : null
                    }

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='account'>
                { user ?
                    <div>
                        <button onClick={() => navigate('/profile')}>Profile</button>
                        |
                        <button onClick={() => logout_user()}>Logout</button>
                    </div>
                    :
                    <Link to={'/auth'}>Account</Link>
                }
            </div>
        </nav>
    );
}

export default MainNav;