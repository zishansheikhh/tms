import { Link } from 'react-router-dom';
import {useState} from "react";
import Sidebar from '../sidebar/sidebar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainLogo from "../../assets/tms_logo.png"
import './topbar.styles.css'

const Topbar = () => {

  const [ isSidenavOpen, setIsSidenavOpen ] = useState(false)
  const sidebarToggle = () => {
    if (isSidenavOpen === false) {
      setIsSidenavOpen(true)
    }
    else {
      setIsSidenavOpen(false)
    }
  }

  return (
    <div>
      <div className="topbar-container">
        <Link to='/'>
          <img src={MainLogo} alt="The Musical SwaMi Logo" className='main-logo' />
        </Link>
        <div className='navbar-links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tms-academy'>Services</Link></li>
            <li><Link to='/about-me'>About me</Link></li>
            <li><Link to='/contact-me'>Contact me</Link></li>
          </ul>
        </div>
        <span className='cta-btn-text f-size-1 side-menu-icon' onClick={sidebarToggle} >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </span>
      </div>
      { isSidenavOpen && <Sidebar sidebarToggle={sidebarToggle} /> }
    </div>
  );
};

export default Topbar;
