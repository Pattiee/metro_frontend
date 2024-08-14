import React from 'react';
import Header from '../../../sections/Header';
import { useAuth } from '../../../hooks/useAuth';
import './profile.css'
import Footer from '../../../sections/Footer';

const Profile = () => {

    const { user } = useAuth();

  return (
    <section className='profile'>
        <section>
            <Header/>
        </section>
        <section className='profile-info'>
            <header className='jumbotron'>
                <h3>
                    <strong>Hi {user?.first_name},</strong>
                </h3>
            </header>

            <p>
                <strong>Email: </strong>{user?.email}
            </p>

            <strong>Authorities: </strong>
            <ul>
                { user?.roles &&
                user?.roles.map((role, index) => <li key={index}>{role}</li> )}
            </ul>
        </section>


        <section>
          <Footer/>
        </section>
    </section>
  )
}

export default Profile;