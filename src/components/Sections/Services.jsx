import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/sahil-one.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg">
        <div className="container">
          <ClientSlider />  
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{ textAlign:"center" }}>What is my Website Development Skill</h1>
            <p className="font13" style={{ textAlign:"center" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Graphic design is not just about creating visually appealing elements; it’s about telling a compelling story"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design"
                subtitle="Ensure your website looks and functions flawlessly on all devices. Our focus on responsive design guarantees an optimal user experience, no matter the screen size"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Development"
                subtitle="Unleash the full potential of your online presence with our custom web development solutions. Our experienced developers craft unique websites that align seamlessly with your brand identity and business objectives."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Print" subtitle="Provide ongoing support, addressing any issues promptly to ensure your website remains up-to-date.
              Ready to Elevate Your Online Presenc" />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={AddImage1} alt="office" />
                  </AddImgWrapp1>
                </div>
              </AddRightInner>
            </AddLeft>
            <AddLeft>
            <h4 className="font15 semiBold">A few words about company</h4>
            <h2 className="font40 extraBold">A Study of Creativity</h2>
            <p className="font12">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
              diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
              <div style={{ width: "190px" }}>
                <FullButton title="Contact Us" action={() => alert("clicked")} />
              </div>
            </ButtonsRow>
          </AddLeft>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 400px;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

