import React from 'react';
import './folder-styles.css';

const Register = ({ updateLoginState }) => {
  return (
    <section className='registration-section'>

      <section className='left-section'>
        <div className='section-data'>
          <h1>Sign In</h1>
          <p>To keep connected with us please login <br /> with your personal info</p>
          <button onClick={updateLoginState}>Sign in</button>
        </div>
      </section>

      <section className='right-section'>
        <h1>Sign Up</h1>

        <div className='single-sign-on-accounts'>
          <div className='accounts'>Ac_1</div>
          <div className='accounts'>google</div>
          <div className='accounts'>Ac_2</div>
        </div>

        <p>or use your account</p>

        <form action="" method="post">

          {/* pg1 */}
          <div>
            
          </div>

          {/* pg2 */}
          <div>
            <input type="email" required placeholder='Email'/>
            <input type="password" required placeholder='Password'/>
            <input type="password" required placeholder='Confirm password'/>
          </div>

          <button type="submit">Sign up</button>

        </form>
      </section>

    </section>
  )
}

export { Register };
