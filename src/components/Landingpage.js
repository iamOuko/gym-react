import React from 'react';
import styled from "styled-components";
import { Link} from 'react-router-dom';
import Arms from '../img/arms.jpg';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
`;
 
const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }

`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;

    @media only screen and (max-width: 480px) {
      width: 100%;
      font-size: 50px;
    }

`

const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
`

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px) {
      width: 100%;
      flex-direction: column;
    }

`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
      margin-bottom: 20px;
    }

`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
`;

const Image = styled.img`
    width: 100%;

`


const Landingpage = () => {
  return (
      <Container>
          <Left>
              <Title>No Pain No Gain</Title>
              <Description>
                  Gold Fitness dedicated to helping our members improve their strength, 
                   flexibility and overall health.
              </Description>
              <Info>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
                
                <Contact>
                    <Phone>Call Us (254) 722-123-456</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
              </Info>
            </Left>
          <Right><Image src={Arms}/></Right>
      </Container>
   
  )
}

export default Landingpage