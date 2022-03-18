import React from 'react'
import styled from 'styled-components'
import Cardio from '../img/cardio.jpg'

const Container = styled.div`
    display: flex;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
      }
`
const Left = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        display: none;
      };
`
const Image = styled.img`
    height: 100%;
    width: 100%;
`
const Right =  styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
      }
`
const Wrapper = styled.div`
    padding: 50px;
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
    margin-top: 20px;
    color: #555;
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={Cardio} />
           
        </Left>
        <Right>
            <Wrapper>
                <Title>Just Start!</Title>
                <Description>
                    At GoldFitness Gym, there are a lot of exercises to be done.We provide various services like weight lifting,
                    Cardio, Outdoor training,Yoga, Zumba, Boxing and Swimming.
                <p>Charges:</p>
                <ul>
                    <li>Daily: ksh 400</li>
                    <li>Monthly: ksh 4,000</li>
                    <li>Yearly: ksh 36,000</li>
                    <li>Swimming: ksh 250 per day</li>
                </ul>

                </Description>
            
            </Wrapper>
        </Right>

    </Container>
       
  
  )
}

export default Service