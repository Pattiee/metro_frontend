import React, {useEffect, useState} from 'react'
import './topnav.css'

const Topnav = () => {

  // Custom
  const htmlElem = document.querySelector("html");

  const initTheme = () => {
      const currentTheme = localStorage.getItem("theme") ?? "dark";
      htmlElem.classList.add(currentTheme);
  };
  initTheme();


  const setTheme = () => {
      const currentTheme = localStorage.getItem("theme") ?? "dark";
      const newTheme = currentTheme === "dark" ? "light": "dark";
      htmlElem.classList.replace(currentTheme, newTheme);
      localStorage.setItem("theme", newTheme);
  };


  // Custom
  // const openNavLinks = () => {
  //     document.querySelector(".nav-links").classList.toggle("open");
  //     setShowMenu(true);
  //     document.querySelectorAll(['.nav-links li']).forEach(link => {
  //         link.classList.toggle("fade");
  //     });
  //     document.querySelectorAll([".hamburger .line"]).forEach(line => {
  //         line.classList.toggle("opened");
  //     });
  // }

  // 
  const handleAuthPage = () => {
    window.location.replace("/auth")
  }


  const[show, setShow] = useState(true);
    

    useEffect(() => {
      let previousScrollPosition = 0;
      let currentScrollPosition = 0;

      window.addEventListener('scroll', function(e){
        // get the new value;
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
    <section className={`header-section navbar mx-auto px-5 shadow topnav active`}>
      <div className='navbar-brand' onClick={() => window.location.replace("/")}>
        <p>Syncro</p>
      </div>

      <div className='form'>
        <form method='GET'>
          <input className='search-input-field' type="search" name="search" id="search" placeholder='Search... ' required/>
          <input className='search-btn' type="submit" value="Search"/>
        </form>
      </div>

      <div className='theme-section'>
        <button className='btn-theme' onClick={() => setTheme()}>Theme</button>
      </div>

      <div className='account-buttons center mx-1'>
        <button className="account-button" onClick={handleAuthPage}>Account</button>
      </div>
    </section>
  )
}

export default Topnav;
