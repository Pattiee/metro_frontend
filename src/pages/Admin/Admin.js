import React from 'react'
import Header from '../../sections/Header'
import Footer from '../../sections/Footer'
import './admin.css';

const Admin = () => {
  return (
    <div>
      <section>
        <Header/>
      </section>

      <section className='content'>
        <h1>Welcome to admin page</h1>
      </section>

      <section>
          <Footer/>
      </section>
    </div>
  )
}

export default Admin
