import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({num}) {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            SKILLSHARE
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/courses'
                className='nav-links'
              >
                Courses
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/enrolledm'
                className='nav-links'
              >
                Enrolled
              </Link>
            </li> 
            <li className='nav-item'>
              <div>
              <p
               
                className='nav-links1'
              >
                {num}
              </p>
              </div>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
