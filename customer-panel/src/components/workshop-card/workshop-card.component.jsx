import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

import CoverImage from "../../assets/piano_course.jpg";

const Container = styled.div`
  width: 90%;
  margin: 70px auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-radius: 10px;
  background-color: black;
  color: white;
  box-shadow: 1.4px 1.5px 2.2px rgba(0, 0, 0, 0.02),
    3.3px 3.7px 5.3px rgba(0, 0, 0, 0.028),
    6.3px 6.9px 10px rgba(0, 0, 0, 0.035),
    11.2px 12.3px 17.9px rgba(0, 0, 0, 0.042),
    20.9px 23px 33.4px rgba(0, 0, 0, 0.05), 50px 55px 80px rgba(0, 0, 0, 0.07);
`;
const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: relative;
  /* height: 250px; */
`;
const Image = styled.img`
  width: 100%;
  /* height:100%; */
  border-radius: 10px 10px 0 0;
`;
const InfoContainer = styled.div`
  width: 90%;
  margin: 15px auto;
`;
const WorkshopTitle = styled.h3`
  font-family: "NunitoSans";
  letter-spacing: 1px;
  margin: 0px;
`;
const WorkshopDate = styled.span`
  margin: 0;
  font-family: "NunitoSans";
`;
const WorkshopDetails = styled.p`
  margin: 15px 0 0 0;
  font-size: 11px;
`;

// const Wishlist = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 5px;
// `;
const UpcomingWorkshopContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 8%;
  text-align: center;
`;
const UpcomingWorkshop = styled.h2`
    width: 100%;
    font-family: "NunitoSans";
    margin: 0;
`;
const ToolsContainer = styled.div`
    width:100%;
    box-sizing: border-box;
    padding: 2px 10px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 10px;
`

const ToolsRightContainer = styled.div`
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PlayButton = styled.div`
    position: absolute;
    left: 46%;
    top: 45%;
    cursor:pointer;
`

const EnrollButton = styled.div`
  margin: 32px auto;
`;

const WorkshopCard = ({ workshop }) => {
  const { id, date, details, upcoming } = workshop;

  const [isMute, setIsMute] = useState(true);

  const toggleSound = () => {
    setIsMute(!isMute);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={CoverImage} style={{filter: upcoming ? 'blur(5px)' : 'none'}} />
        {upcoming && (
          <UpcomingWorkshopContainer>
            <UpcomingWorkshop>Upcoming Workshop</UpcomingWorkshop>
            <WorkshopDate>{date}</WorkshopDate>
          </UpcomingWorkshopContainer>
        )}
        {
            (!upcoming) && (
                <ToolsContainer>
                    <div style={{cursor: 'pointer'}} onClick={toggleSound}>
                        {
                            isMute ? <FontAwesomeIcon icon="fa-solid fa-volume-xmark" size="lg" />
                            : <FontAwesomeIcon icon="fa-solid fa-volume-high" size="lg" />
                        }
                    </div>
                    <ToolsRightContainer>
                        <div style={{cursor: 'pointer'}}>
                            <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
                        </div>
                        <div style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon icon="fa-solid fa-expand" size="lg" />
                        </div>
                    </ToolsRightContainer>
                </ToolsContainer>
            )
        }
        {
            (!upcoming) && <PlayButton>
                <FontAwesomeIcon icon="fa-solid fa-play" size="2xl"/>
            </PlayButton>
        }
      </ImageContainer>
      <InfoContainer>
        <WorkshopTitle>WORKSHOP NO. {id}</WorkshopTitle>
        <WorkshopDate style={{ color: "#bdbdbd" }}>{date}</WorkshopDate>
        <WorkshopDetails style={{ color: "#bdbdbd" }}>
          {details}
        </WorkshopDetails>
        {
            (upcoming) && <EnrollButton className="btn pink-bg cta-btn-text">ENROLL NOW</EnrollButton>
        }
      </InfoContainer>
    </Container>
  );
};

export default WorkshopCard;
