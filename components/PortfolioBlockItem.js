import Link from "next/link";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 33.33333%;
    min-height: 500px;
  }
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  }
  :hover {

  }
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  color: white;
`;
const SubTitle = styled.h4`
  color: white;
`;

const PortfolioBlockItem = ({ data }) => {
  console.log("Portfolio item: " + data.fields.title);
  return (
    <Link
      href={{
        pathname: "/portfolio/" + data.fields.slug,
      }}
    >
      <Background
        backgroundImage={data.fields?.featuredImage?.fields?.file?.url}
      >
        <Container>
          <Title>{data.fields.title}</Title>
          <SubTitle>{data.fields.category}</SubTitle>
        </Container>
      </Background>
    </Link>
  );
};

export default PortfolioBlockItem;
