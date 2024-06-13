import React, { useState } from "react";
import NavItemBar from "../components/nav";
import styled, { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../theme";
import Hero from "../assets/images/hero.png";
import ButtonFactory from "../components/button";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

const LeftPart = styled.div`
  width: 50%;
  height: 650px;
  text-align: left;
  margin: 15px;
`;

const ContactWrapper = styled.div`
  width: 690px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  border-radius: 10px;
  background: ${(props) => props.theme.contactWrapperColor};
  padding-left:40px;
  padding-top:10px;

`;

const ConnectWrapper = styled.div`
  width: 590px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 100%;
  border-radius: 10px;
  height: 400px;
  background: ${(props) => props.theme.contactWrapperColor};
`;

const PhoneWrapper = styled.div`
  width: 590px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 100%;
  border-radius: 10px;
  height: 400px;
  background: ${(props) => props.theme.contactWrapperColor};
`;

const RightPart = styled.div`
  width: 50%;
  height: 650px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 45px;
   margin-top: 45px;
`;

const HomeWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
`;

const ConnectContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: ${(props) => props.theme.lightColor};
`;

const Input = styled.input`
  /* Button */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  gap: 10px;

  width: 500px;
  height: 41px;

  border: 1px solid #b2bbc0;
  border-radius: 10px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const TextInput = styled.input`
  /* Button */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 30px;
  gap: 10px;

  width: 500px;
  height: 219px;

  border: 1px solid #b2bbc0;
  border-radius: 10px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Label = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.primaryTextColor};
`;

const GetInTouchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  gap:5px;
    color: ${props => props.theme.primaryTextColor};
`;
function Contact() {
  const [isLightMode, setIsLightMode] = useState(true);

  function handleToggle() {
    setIsLightMode(!isLightMode);
  }

  return (
    <>
      <ThemeProvider theme={!isLightMode ? themeDark : themeLight}>
        <ConnectContainerWrapper>
          <HomeWrapper>
            <NavItemBar
              toggleLightMode={handleToggle}
              isLightMood={isLightMode}
            />
            <Container>
              <LeftPart>
                <ContactWrapper>
                  <GetInTouchWrapper>
                    <span>Get in Touch</span>{" "}
                    <span>
                      {" "}
                      Ready to Work Together? <span style={{color:' #ff0013'}}>Build a project with us!</span>
                    </span>
                  </GetInTouchWrapper>
                  <br />
                  <br />
                  <Label>Name & Company</Label>
                  <Input placeholder="Enter Your Name" />
                  <br />
                  <br />
                  <Label>Email</Label>
                  <Input placeholder="Enter Your Email" />
                  <br />
                  <br />
                  <Label>Phone No</Label>
                  <Input placeholder="Enter Your Phone No" />
                  <br />
                  <br />
                  <Label>Project Description</Label>
                  <TextInput placeholder="Enter Your message" />
                  <br />
                  <br />
                  <ButtonFactory type="submit" />
                </ContactWrapper>
              </LeftPart>
              <RightPart>
                <PhoneWrapper />
                <ConnectWrapper />
              </RightPart>
            </Container>
          </HomeWrapper>
        </ConnectContainerWrapper>
      </ThemeProvider>
    </>
  );
}

export default Contact;
