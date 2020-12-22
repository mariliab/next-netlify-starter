import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  background: #f8f5f2;
  @media (min-width: 768px) {
    min-height: 500px;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`;
const Image = styled.div`
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    height: 100%;
    background-size: contain;
  }
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
      <Image backgroundImage={data.fields?.file?.url}></Image>
    </Background>
  );
};

export default FeaturedImage;
