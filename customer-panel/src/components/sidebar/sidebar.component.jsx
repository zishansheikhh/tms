import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";
import "./sidebar.styles.css";
import MainLogo from "../../assets/tms_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div>
      <div className="sidenav">
        <ul className="slideout">
          <div className="mt-4">
          <Link to="/">
            <img
              src={MainLogo}
              alt="The Musical SwaMi Logo"
              className="main-logo"
            />
          </Link>
          </div>
          <span
            onClick={sidebarToggle}
            className="sidenav-close f-size-1 light-text"
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
          <Pulse>
            <div className="sidenav-links decoration-none">
              <li>
                <Link to="/" className="decoration-none light-text">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tms-academy" className="decoration-none light-text">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="decoration-none light-text">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact-me" className="decoration-none light-text">
                  Contact Me
                </Link>
              </li>
            </div>
          </Pulse>
          <Bounce top cascade>
            <ul className="social-links">
              <li>
                <a
                  href="https://wa.me/9473814273?text=i%20am%20iron%20man"
                  className="f-size-1 mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/themusicalswami/"
                  className="f-size-1 mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.co"
                  className="f-size-1 mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="f-size-1 mr-2">
                  <FontAwesomeIcon icon="fa-solid fa-at" />
                </Link>
              </li>
            </ul>
          </Bounce>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
