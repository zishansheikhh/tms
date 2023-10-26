import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import SwaMi from '../../assets/swami.jpg';

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  box-sizing: border-box;
`
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  padding: 50px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`
const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoContainer = styled.div`
  width: 90px;
  height: 90px;
  background-color: lightgrey;
  border-radius: 50%;
`
const Logo = styled.img`
  width: 100%;
  border-radius: 50%;
`
const Title = styled.h1`
  color: #fff;
  text-decoration: none;
  margin: 15px 0 0 0;
`

const AboutText = styled.p`
  width:95%;
  text-align: center;
  margin: 0;
`

const ExploreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 599px) {
    margin-top: 25px;
  }
`

const ExploreHead = styled.h3`
  margin: 0 0 20px 0;
`

const ExploreLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExploreLink = styled.a`
  color: #fff;
  margin: 3px auto;
  transition: 0.3s all;

  &:hover {
    color: #DF1F2D;
  }
`

const NewsletterContainer = styled.div`
  width: 90%;
  @media (max-width: 599px) {
    margin-top: 25px;
  }
`

const Newsletterform = styled.form`

`
const Newsletterheader = styled.h3`

`

const NewesletterInput = styled.input`
  padding: 8px;
  border: #1A1A1A;
  border-radius: 4px 0 0 4px;
`
const SubmitButton = styled.button`
border-radius: 0 4px 4px 0;
`

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 599px) {
    margin-top: 25px;
  }
`
const SocialHead = styled.h3`
  margin: 0 0 20px 0;
`
const SocialsWrapper = styled.div`
  width: 70%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 999px) {
    justify-content: space-between;
  }
`
const Socials = styled.a`
  color: #447BBE;
  transition: 0.3s all;

  &:hover {
    color: #2B3784;
  }
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AboutContainer>
          <LogoContainer>
            <Logo src={SwaMi} />
          </LogoContainer>
          <Title>TMS</Title>
          <AboutText>
            Home for your music career!
          </AboutText>
        </AboutContainer>
        <ExploreContainer>
          <ExploreHead>
            Explore TMS
          </ExploreHead>
          <ExploreLinkContainer>
            <ExploreLink to='/about-me'>About Me</ExploreLink>
            <ExploreLink to='/tms-academy'>Services</ExploreLink>
            <ExploreLink to='/contact-me'>Contact Me</ExploreLink>
            <ExploreLink to='/privacy-policy'>Privacy Policy</ExploreLink>
            <ExploreLink to='/terms'>Terms and Conditions</ExploreLink>
          </ExploreLinkContainer>
        </ExploreContainer>
        <SocialContainer>
          <SocialHead>Connect with me</SocialHead>
          <SocialsWrapper>
            <Socials href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" />
            </Socials>
            <Socials href="https://youtube.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-youtube" size="2xl" /> 
            </Socials>
            <Socials href="https://linkedin.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
            </Socials>
            <Socials href="https://spotify.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-spotify" size="2xl" />
            </Socials>
          </SocialsWrapper>
        </SocialContainer>
        <NewsletterContainer>
          <Newsletterform>
            <Newsletterheader>Subscribe to get 15% off!</Newsletterheader>
          <NewesletterInput placeholder="Enter your email"></NewesletterInput>
          <SubmitButton type='submit' className="btn pink-bg cta-btn-text"><span>Subscribe</span></SubmitButton>
          </Newsletterform>
        </NewsletterContainer>
        
      </Wrapper>
    </Container>
  );
};

export default Footer;
