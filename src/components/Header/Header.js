import React, { useState, useEffect } from 'react'
import './header.css'
import Topnav from '../Nav/Topnav';

const Header = () => {
    const[show, setShow] = useState(true);
    

    useEffect(() => {
      let previousScrollPosition = 0;
      let currentScrollPosition = 0;

      window.addEventListener('scroll', function(e){
        currentScrollPosition = this.window.pageYOffset;

        if (previousScrollPosition - currentScrollPosition > 0) {
          setShow(false);
        } else if(previousScrollPosition - currentScrollPosition < 0){
          setShow(true);
        }
        previousScrollPosition = currentScrollPosition;
      });
    }, []);


  return (
      <header className={`active sticky`}>
        <Topnav/>
      </header>
  )
}

export default Header
