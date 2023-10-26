import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './about.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DeveshImg from "../../assets/devesh_founder.jpg";
import ZishanImg from "../../assets/zishan_cto.jpg";
import AnishImg from "../../assets/anish_ceo.jpg";
import AshuImg from "../../assets/ashu_cfo.jpeg";

const AboutContent = () => {
    return (
        <div>
            <div className='container-fluid m-auto'>
            <Fade cascade>
                <h2 className='light-text mt-4'>About Me!</h2>
                <h3 className='secondary-text'>Welcome To <span>Vortex Events</span></h3>
                <p className='light-text f-weight-100'><span>Vortex Events</span> is a Professional <span>event management company.</span> Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span>event experience</span>, with a focus on dependability and <span>book tickets, see artist line-up</span>. We're working to turn our passion for <span>event management</span> into a booming 
                <Link className='primary-text' to='/' rel="do-follow" > music festivals across north India</Link>. We hope you enjoy our 
                <span> events</span> as much as we enjoy offering them to you.</p>
                <p className='light-text'>We will keep posting more important posts on our Website for all of you. Please give your support and love.</p>
                <p className='light-text'>Hail Prayagraj 'Allahabad' <br/><br/>
                    <span>See you in the <Link className='primary-text' to='/events'>next event!</Link></span>
                </p>
            </Fade>

            {/* Team Section*/}
            <h2 className='light-text mt-5'>Meet the Team</h2>
            <Slide bottom cascade>
            <div className='team-wrapper'>
                <div class="team-container mb-5">
                    <img className='ml-8' src={DeveshImg} alt="Devesh Jaiswal" />
                    <p className='light-text dj_info'>Devesh Jaiswal<br/>
                        <span>Founder, COO<br/>Youngest entrepreneur</span>
                        <ul className='social-icons-about'>
                            <li><a href="https://instagram.com/devesh_jaiswal.dj"  rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                            <li><a href="https://wa.me/+919151040021?text=I%20got%your%20number%20from%20Vortex" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                            <li><a href="https://instagram.com/adastra.vd?igshid=Yzg5MTU1MDY=" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                        </ul>
                    </p>

                    <img src={ZishanImg} alt="Zishan Sheikh" />
                    <p  className='light-text zishan_info'>Zishan Sheikh<br/>
                        <span>CTO,<br/>Creative af!</span>
                        <ul className='social-icons-about'>
                            <li><a href="https://instagram.com/zishansheikhh"  rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                            <li><a href="https://wa.me/+917566699108?text=I%20got%your%20number%20from%20Vortex" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                            <li><a href="https://www.linkedin.com/in/zishan-sheikh" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                        </ul>
                    </p>

                    <img src={AnishImg} alt="Anish Pandey" />
                    <p  className='light-text anish_info'>Anish Pandey<br/>
                        <span>CEO,<br/>Dedicated his life for social work and made a name for himself.</span>
                        <ul className='social-icons-about'>
                            <li><a href="https://instagram.com/i_anish_pandey"  rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                            <li><a href="https://wa.me/+919151040020?text=I%20got%your%20number%20from%20Vortex" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                            <li><a href="https://instagram.com/adastra.vd?igshid=Yzg5MTU1MDY=" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                        </ul>
                    </p>

                    <img src={AshuImg} alt="Ashutosh Dwivedi" />
                    <p  className='light-text ashu_info'>Ashutosh Dwivedi<br/>
                        <span>CFO,<br/>THE MONEYMAN. ASHU is a post graduate in commerce plus a law graduate .Where there is money knowledge or food, Ashu will be there.</span>
                        <ul className='social-icons-about'>
                            <li><a href="https://instagram.com/dhashu47"  rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                            <li><a href="https://wa.me/+917388955914?text=I%20got%your%20number%20from%20Vortex" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                            <li><a href="https://twitter.com/dhashu47" rel='noopener' className='secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                        </ul>
                    </p>
                </div>
            </div>
            </Slide>
        </div>
    </div>
    );
};

export default AboutContent;   