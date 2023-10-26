import { Link } from "react-router-dom";
import Sliderpic1 from '../../assets/studio_img_1.jpg';
import Sliderpic2 from '../../assets/studio_img_2.jpg';
import Sliderpic3 from '../../assets/studio_img_3.jpg';
import Sliderpic4 from '../../assets/studio_img_4.jpg';
import Sliderpic5 from '../../assets/studio_img_5.jpg';
import Sliderpic6 from '../../assets/studio_img_6.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../hero-banner/hero-banner.css';

const HomepageWorkshopHighlight = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 499,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    // <div className='mt-4'>
        <div className="studio-banner-container mobile desktop">
                <div className='cards-basic studio-card'>
                    <div className='studio-slider'>
                        <Slider {...settings}>
                            <div>
                                <img src={Sliderpic1} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                            <div>
                                <img src={Sliderpic2} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                            <div>
                                <img src={Sliderpic3} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                            <div>
                                <img src={Sliderpic4} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                            <div>
                                <img src={Sliderpic5} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                            <div>
                                <img src={Sliderpic6} alt="The Musical SwaMi Cover" className='studio-coverpic' />
                            </div>
                        </Slider>
                    </div>
                    <div className='studio-bio-container'>
                        <h3>My Studio</h3>
                        <p>muic my-zik. : the art of producing pleasing or expressive combinations of tones especially with melody, rhythm, and usually harmony. : a musical composition set down on paper. bring your music. : sounds that have rhythm, harmony, and melody.</p>
                        <Link to='' className='btn pink-bg cta-btn-text'>Book studio</Link>
                    </div>
                </div>
        </div>
    // </div>
  );
};

export default HomepageWorkshopHighlight;
