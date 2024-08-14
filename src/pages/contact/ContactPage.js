import React from 'react';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import './contact.css'


const ContactPage = () => {
  return (
    <section>
      <section>
        <Header/>
      </section>

      <section className='content'>
        <h1>This is contact page</h1>
      </section>

      <section>
          <Footer/>
      </section>
    </section>
  )
}

export { ContactPage }
