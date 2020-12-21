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
    width: 50%;
    min-height: 600px;
  }
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  }
  :hover {

  }
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.66);
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 1s;

  :hover {
    background: rgba(0, 0, 0, 0.85);
  }
  :hover h4 {
    opacity: 1;
  }
`;

const TextBlock = styled.div`
  padding: 1rem;
  text-align: center;
  @media (min-width: 992px) {
    padding: 5rem;
  }
`;

const Title = styled.h3`
  color: white;
  margin: 0 0 1rem 0;
  font-size: 200%;
  line-height: 1.2;
`;
const SubTitle = styled.h4`
  color: white;
  margin: 0;
  letter-spacing: 2px;
  line-height: 1.4;
`;

const ShortDescription = styled.h4`
  color: white;
  margin: 2rem 0 0 0;
  line-height: 1.4;
  opacity: 0;
  transition: opacity 1s;
`;

const PortfolioBlockItem = ({ data }) => {
  console.log("PortfolioBlockItem data -> " + JSON.stringify(data, null, 2));
  return (
    <Link
      href={{
        pathname: "/portfolio/" + data?.fields?.slug,
      }}
    >
      <Background
        backgroundImage={data?.fields?.featuredImage?.fields?.file?.url}
      >
        <Container>
          <TextBlock>
            <Title>{data?.fields?.title}</Title>
            <SubTitle>{data?.fields?.category}</SubTitle>
            <ShortDescription>
              {data?.fields?.shortDescription}
            </ShortDescription>
          </TextBlock>
        </Container>
      </Background>
    </Link>
  );
};

export default PortfolioBlockItem;
