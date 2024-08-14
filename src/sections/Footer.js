import React from 'react'
import './styles/footer.css';

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className="footer">
        <div className="footer-content"></div>
        <div className="copyright-section">
            <div>Syncro</div>
            <div>
            {/* //  Created by Patrick on 04/08/24. */}
            Copyright © 2024 . All rights reserved.
            </div>
            <div>Social media icons</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
