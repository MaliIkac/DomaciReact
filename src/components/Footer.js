import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Footer() {

  const [buttonClick, setButtonClick] = useState('');

  const onClick = () => {
    if(buttonClick != '') {
      setButtonClick('');
      setTimeout(() => {
        //alert('Thank you for subscribing!');
        Swal.fire({
          title: 'Great!',
          text: 'Thank you for subscribing!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: 'navy',
          
        });
      }, 10);
    }
  }

  const onChange = (e) => {
    setButtonClick(e.target.value);
  }
  

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter and get weekly access to our best offers!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={buttonClick}
              onChange={onChange}
            /> 
            <Button buttonStyle='btn--outline' onClick={onClick} link={'#'} >Subscribe</Button> 
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SKILLSHARE
            </Link>
          </div>
          <small class='website-rights'>Skillshare © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.skillshare.com/?via=header'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.skillshare.com/?via=header'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.skillshare.com/?via=header'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.skillshare.com/?via=header'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.skillshare.com/?via=header'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
