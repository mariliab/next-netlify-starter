import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
  @media (min-width: 992px) {
    width: 66.6666666%;
  }
`;
const Image = styled.div`
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-size: contain;
  background-attachment: fixed;
  min-height: 300px;
  height: 100%;
  background-repeat: no-repeat;
  @media (min-width: 992px) {
    background-position: center;
    background-size: cover;
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  color: white;
`;
const SubTitle = styled.h2`
  color: white;
`;

const FeaturedImage = ({ data }) => {
  return (
    <Background>
      <Image backgroundImage={data.fields?.file?.url}>
        <Overlay></Overlay>
      </Image>
    </Background>
  );
};

export default FeaturedImage;
