import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        padding: 20px;
      }

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        padding: 20px;
      }
`

const Title = styled.h1`

`

const Description = styled.p`
    font-size: 20px;
    color: #555;
    @media only screen and (max-width: 480px) {
        padding: 20px;
      }
`

const About = () => {
  return (
    <Container>
        <Wrapper>
                <Title>About Us</Title>
                <Description>
                    <h4>Helping people live longer, healthier and happier lives. </h4>
                    <p>
                        One of the most trusted fitness lifestyle providers in the region. Located in Upper Hill, Fitness Plaza.
                        The timings are ideal for everyone as you can hit the gym any time between 5am to 10pm.
                        Plus, the instructors are the best. They've been in the industry for over ten years and assist you with building the body you want absolutely well.
                    </p>
                            

                </Description>
            
            </Wrapper>

    </Container>
  )
}

export default About