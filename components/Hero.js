import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  min-height: 300px;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
`;
const SubTitle = styled.h2`
  color: white;
`;

const Hero = ({ data }) => {
  return (
    <Background backgroundImage={data.backgroundImage?.fields?.file?.url}>
      <Container>
        <Title>{data?.title} </Title>
        <SubTitle>{data?.subtitle}</SubTitle>
      </Container>
    </Background>
  );
};

export default Hero;
