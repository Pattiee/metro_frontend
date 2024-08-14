import React from 'react'
import './footer.css'

import logo from '../../assets/lg.png'

const Footer = () => {
  return (
    <div className='footer mt-5'>
      <footer className='page-footer shadow'>
        <div className='d-flex flex-column mx-auto py-5' style={{'width': '80%'}}>
          <div className='d-flex flex-wrap justify-content-between'>
            <div>
              <a href="/" className='d-flex align-items-center p-0'>
                <img src={logo} alt="logo" style={{'width':'30px' }}/>
                <span className='ms-3 h5 font-weight-bold'>Syncro</span>
              </a>

              <p className='my-3' style={{"width": "250px"}}>
                We are helding worthy events, allowing live chats. They go long and charges nothing, absolutely free.
              </p>


              <span className='mt-4 d-flex justify-content-center'>
                <button className='btn btn-dark btn-flat p-2'>
                  <i className='fa fa-facebook'></i>
                </button>

                <button className='btn btn-dark btn-flat p-2'>
                  <i className='fa fa-twitter'></i>
                </button>

                <button className='btn btn-dark btn-flat p-2'>
                  <i className='fa fa-instagram'></i>
                </button>
              </span>
            </div>

            <div>
              <p className='h5 mb-4' style={{"font-weight": 600}}>Syncro</p>
              <ul className="p-0" style={{"list-style": 'none', "cursor": "pointer"}}>
                <li className="my-2"><a href="/" className="">Resources</a></li>
                <li className="my-2"><a href="/" className="">About Us</a></li>
                <li className="my-2"><a href="/" className="">Contact</a></li>
                <li className="my-2"><a href="/" className="">Blog</a></li>
              </ul>
            </div>

            <div>
              <p className="h5 mb-4">Help</p>
              <ul className="p-0" style={{'list-style': 'none', 'cursor': 'pointer'}}>
                <li className="my-2"><a href="/" className="">Support</a></li>
                <li className="my-2"><a href="/" className="">Sign Up</a></li>
                <li className="my-2"><a href="/" className="">Sign In</a></li>
              </ul>
            </div>

          <div>
            <p className="h5 mb-4" style={{'font-weight': 600,}}>Help</p>
            <ul className="p-0">
              <li className="my-2"><a href="/" className="">Support</a></li>
              <li className="my-2"><a href="/" className="">Sign Up</a></li>
              <li className="my-2"><a href="/" className="">Sign In</a></li>
            </ul>
          </div>
        </div>
            <small className='d-flex flex-nowrap justify-content-center'>
                &copy; 
                <span className='year' id='year'>
                    {
                        new Date().getFullYear()
                    }
                </span> Syncro. All rights reserved.
            </small>
          </div>
      </footer>
    </div>
  )
}

export default Footer;
