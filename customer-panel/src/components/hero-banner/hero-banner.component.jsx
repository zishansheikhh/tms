import ProfilePic from '../../assets/swami.jpg';
import CoverPic from '../../assets/album_pic3.jpg';
import DesktopCoverPic from '../../assets/wp3022070.jpg'
import './hero-banner.css'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className=''>
      <div className='container m-auto'>
        <div className="hero-banner-container mobile desktop">
            <div className='cards-basic'>
              <img 
                src={CoverPic} 
                alt="The Musical SwaMi Cover" 
                className='coverpic' 
                unoptimized 
              />
              <img 
                src={DesktopCoverPic} 
                alt="The Musical SwaMi Cover" 
                className='desktop-coverpic' 
                unoptimized 
              />
              <div className='bio-container'>
                <img src={ProfilePic} alt="The Musical SwaMi Cover" className='profilepic' />
                <h3>About me</h3>
                <p>Swapnil Mishra is a highly skilled music composer and producer based in Lucknow. With a diverse range of projects under his belt, including pop, rock, hip-hop, and EDM genres, Swapnil has demonstrated his versatility and expertise in the music industry. Alongside his composition and production work, he also excels as a piano instructor, sharing his passion and knowledge with students of all age groups for over two years.
                </p>
                <Link to='/contact-me' className='btn pink-bg cta-btn-text'>Learn more</Link>
                <div className='mb-2'>&nbsp;</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
