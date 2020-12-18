import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  min-height: 300px;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-size: cover;
  background-position: center;
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

const FeaturedImage = ({ data }) => {
  return (
    <Background backgroundImage={data.fields?.file?.url}>
      <Container></Container>
    </Background>
  );
};

export default FeaturedImage;
