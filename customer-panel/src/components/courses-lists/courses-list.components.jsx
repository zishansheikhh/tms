import styled from "styled-components";
import MainCourseCard from "../main-courses-card/main-course-card.component";

const Container = styled.div`   
    width: 100%;
    margin: 50px auto;
`
const Title = styled.h1`
    width: 90%;
    margin: auto;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    text-decoration: underline;
    letter-spacing: 1px;
    font-family: NunitoSans;
    font-size: 27px;
`
const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const CoursesLists = () => {
  return (
    <Container>
        <Title>
            Get Courses
        </Title>
        <Wrapper>
            <MainCourseCard />
            <MainCourseCard />
            <MainCourseCard />
            <MainCourseCard />
        </Wrapper>
    </Container>
  )
}

export default CoursesLists