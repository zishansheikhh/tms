import styled from "styled-components";
import WorkshopCard from "../workshop-card/workshop-card.component";

const Container = styled.div`
    width: 90%;
    margin: auto;
`

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Title = styled.h1`
    width: 90%;
    margin: auto;
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-decoration: underline;
    letter-spacing: 1px;
    font-family: NunitoSans;
    font-size: 27px;
`

const WORKSHOPARRAY = [
    {
        id: 5,
        date: '22 Jan 2023',
        details: 'down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.',
        upcoming: true,
    },
    {
        id: 4,
        date: '20 Jan 2023',
        details: 'down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.',
        upcoming: false,
    },
    {
        id: 3,
        date: '18 Jan 2023',
        details: 'down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.',
        upcoming: false,
    },
    {
        id: 2,
        date: '16 Jan 2023',
        details: 'down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.',
        upcoming: false,
    },
    {
        id: 1,
        date: '14 Jan 2023',
        details: 'down on paper. melody.down on paper. bring your music. : sounds that have rhythm, harmony, and melody.',
        upcoming: false,
    },
]


const WrokshopLists = () => {
  return (
    <Container>
        <Title>
            Workshops
        </Title>
        <Wrapper>
            {
                WORKSHOPARRAY.map((workshop) => {
                    return <WorkshopCard workshop={workshop} key={workshop.id} />
                })
            }
        </Wrapper>
    </Container>
  )
}

export default WrokshopLists