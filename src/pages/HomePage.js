import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import './home.css';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <section className='home-page'>
        <section>
          <Header/>
        </section>

        <section className='content'>
          <button onClick={() => navigate('admin')}>To admin page</button>
          <button onClick={() => navigate('shopping')}>To shopping</button>
        </section>

        <section>
          <Footer/>
        </section>
    </section>
  )
}

export default HomePage;
