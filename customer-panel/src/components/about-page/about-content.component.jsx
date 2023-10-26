import { useState } from "react";
import Aboutimg1 from "../../assets/swami-about.jpg";
import Aboutimg2 from "../../assets/swami-about.jpg";
import Aboutimg3 from "../../assets/swami-about.jpg";

import './about.styles.css';



const AboutContent = () => {

    const [hoveredImage, setHoveredImage] = useState(null);

    const imagesData = [
        { imgSrc: Aboutimg1, 
          name: 'when I was a kid',
          },
        { imgSrc: Aboutimg2, 
          name: 'when I hit puberty' ,
          },
        { imgSrc: Aboutimg3, 
          name: 'When I became a whore',
          },
        { imgSrc: Aboutimg3, 
            name: 'When I became a whore',
            },
      ];

    return (
        <div>
            <div className="container m-auto">
                <div className="mt-4"></div>
                <h1>Welcome to The Musical SwaMi</h1>
                <div className="about-wrapper">
                <div className="about-slider">
                    <div className="about-slider-grid">
                        {imagesData.map((imageData, index) => (
                            <div
                            key={index}
                            className="about-slider-container"
                            onMouseEnter={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(null)}
                            >
                            <img src={imageData.imgSrc} alt="" />
                            {
                                hoveredImage === index && 
                                <div className="about-slider-overlay">
                                    <p>{imageData.name}</p>
                                </div>
                            }
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="about-content-card-grid">
                        <div className="about-card">
                            <div className="about-card-img-wrapper">
                                <img src={Aboutimg1} alt=""/>
                            </div>
                            <div className="about-card-content margin-left-3">
                                <h3>How I Started</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur</p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-card-content margin-right-3">
                                <h3>My Achievements</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur</p>
                            </div>
                            <div className="about-card-img-wrapper">
                                <img src={Aboutimg2} alt=""/>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-card-img-wrapper">
                                <img src={Aboutimg3} alt=""/>
                            </div>
                            <div className="about-card-content margin-left-3">
                                <h3>My Vision</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;   