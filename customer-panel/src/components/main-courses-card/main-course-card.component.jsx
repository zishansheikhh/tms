import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

import CoverImage from "../../assets/piano_course.jpg"

const Container = styled.div`
    width: 90%;
    margin: 70px auto;
    box-sizing: border-box;
    padding-bottom: 10px;
    border-radius: 10px;
    background-color: black;
    color: white;
    box-shadow:
    1.4px 1.5px 2.2px rgba(0, 0, 0, 0.02),
    3.3px 3.7px 5.3px rgba(0, 0, 0, 0.028),
    6.3px 6.9px 10px rgba(0, 0, 0, 0.035),
    11.2px 12.3px 17.9px rgba(0, 0, 0, 0.042),
    20.9px 23px 33.4px rgba(0, 0, 0, 0.05),
    50px 55px 80px rgba(0, 0, 0, 0.07);
`
const Coursecardwrapper =styled.div `
    display: flex;
`;
const ImageContainer = styled.div`
    width: 100%;
    border-radius: 10px 10px 0 0;
    /* height: 250px; */
`
const Image = styled.img`
    width: 100%;
    /* height:100%; */
    border-radius: 10px 10px 0 0;
`
const InfoContainer = styled.div`
    width: 90%;
    margin: 15px auto;
    position: relative;
`
const CourseName = styled.h3`
    font-family: 'NunitoSans';
    letter-spacing: 1px;
    margin: 0px;
`
const CourseDetail = styled.span`
    margin: 0;
    font-family: 'NunitoSans';
`
const Wishlist = styled.div`
    position: absolute;
    top: 0px;
    right: 5px;
`
const AddToCartButton = styled.div`
    font-family: 'NunitoSans';
    margin: 32px auto;
    background-color: rgb(255, 71, 165);
    box-sizing: border-box;
    padding: 10px 60px;
    border-radius: 10px;
    font-size: 20px;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
`


const MainCourseCard = () => {

    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted)
    }

  return (
    <Container>
        <ImageContainer>
            <Image src={CoverImage} />
        </ImageContainer>
        <InfoContainer>
            <CourseName>
                Piano Techniques
            </CourseName>
            <CourseDetail>
                Beginner Course | 1-3 Months
            </CourseDetail>
            <AddToCartButton>
                <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                <span style={{marginLeft: '5px'}}>Add To Cart</span></AddToCartButton>
            <Wishlist onClick={toggleWishlist}>
                {
                    (isWishlisted) ? <FontAwesomeIcon icon="fa-solid fa-heart" size="2xl" />
                    : <FontAwesomeIcon icon="fa-regular fa-heart" size="2xl"/>
                }
            </Wishlist>
        </InfoContainer>
    </Container>
  )
}

export default MainCourseCard