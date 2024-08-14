import React from 'react'
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

const HHomePage = () => {
  return (
    <section>
      <section><Header/></section>

      <section className='content'>
        <h1>Housing and Booking home page</h1>
      </section>

      <section><Footer/></section>
    </section>
  )
}

export default HHomePage;