import { Link } from 'react-router-dom';
import ServiceImg1 from '../../assets/album_pic2.jpg';

import './services-card.styled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Services = () => {
    return (
        <div className='container-fluid m-auto'>
            <div className='services-grid-home'>
                <h1>My Services</h1>
                <div className='services-grid-home-wrapper'>
                    <div className='cards-basic'>
                        <div className='icon-img'>
                            <img src= {ServiceImg1} alt='Service TMS'/>
                        </div>
                        <div className='title'>
                            <h3>Music Studio</h3>
                        </div>
                        <div className='description'>
                            <p>Hello there there blaj blah blah lorem ipsum falana dhikana.
                            Hello there there blaj blah blah lorem ipsum falana dhikana</p>
                        </div>
                        <div className='contact-btn'>
                            <Link to= '/contact-me' className='btn pink-bg cta-btn-text'>Contact Me <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                        </div>
                    </div>

                    <div className='cards-basic'>
                        <div className='icon-img'>
                            <img src= {ServiceImg1} alt='Service TMS'/>
                        </div>
                        <div className='title'>
                            <h3>Academy</h3>
                        </div>
                        <div className='description'>
                            <p>Hello there there blaj blah blah lorem ipsum falana dhikana.
                            Hello there there blaj blah blah lorem ipsum falana dhikana</p>
                        </div>
                        <div className='contact-btn'>
                            <Link to= '/tms-academy' className='btn pink-bg cta-btn-text' >Visit Academy <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                        </div>
                    </div>

                    <div className='cards-basic'>
                        <div className='icon-img'>
                            <img src= {ServiceImg1} alt='Service TMS'/>
                        </div>
                        <div className='title'>
                            <h3>Live Workshops</h3>
                        </div>
                        <div className='description'>
                            <p>Hello there there blaj blah blah lorem ipsum falana dhikana.
                            Hello there there blaj blah blah lorem ipsum falana dhikana
                            </p>
                        </div>
                        <div className='contact-btn'>
                            <Link to= '/workshops' className='btn pink-bg cta-btn-text'>Book Now <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;