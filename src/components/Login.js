import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"></CTALogoOne>
            <SignUp>GET ALL YOUR MOVIES HERE</SignUp>
            <Description>Get endless entertainment and the shows and movies you love.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
          </CTA>
          <BgImage/>
          </Content>
      </Container>
  )
}


const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  // margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // margin-top: 0;
  // align-items: center;
  // text-align: center;
  // margin-right: auto;
  // margin-left: auto;
  // transition-timing-function: ease-out;
  // transition: opacity .2s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  margin-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #040405;
  background-color: #1CE783;
  margin-bottom: 12px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  font-size: 18px;
  letter-spacing: 1.5px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1ce783b0;
  }
`;

const Description = styled.p`
  color: hsla(0,0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login