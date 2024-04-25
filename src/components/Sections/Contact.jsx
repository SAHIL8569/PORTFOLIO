import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/tele-phone.png";
import ContactImg2 from "../../assets/img/sahil-com.png";
import ContactImg3 from "../../assets/img/sahil-linkedin.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex" style={{ justifyContent:'space-between', flexWrap:'wrap'}}>
                <ContactImgBox>
                <img src={ContactImg1} alt="office" className="radius6" width={80}/>
                  <h2>Phone Me</h2>
                  <span><a href="tel:123-456-7890">(+61)4107 32787</a></span>
                </ContactImgBox>
                <ContactImgBox>
                <img src={ContactImg2} alt="office" className="radius6" width={80}/>
                <h2>Mail Me</h2>
                <span><a href= "mailto: sahilpatel@gmail.com">sahilpatel@gmail.com</a></span>
                </ContactImgBox>
                <ContactImgBox>
                <img src={ContactImg3} alt="office" className="radius6" width={80}/>
                <h2>Follow Me</h2>
                <span><a href= " https://www.linkedin.com/in/jatin-hirapara-53916718b/">@sahilpatel</a></span>
                </ContactImgBox>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #3b448b;
  background-color: #3b448b;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #3b448b;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin-bottom: 70px;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









