import PortfolioPage from "../../components/PortfolioPage";

const data = [];

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getServerSideProps({ params }) {
  let data = await client.getEntries({
    content_type: "portfolioItem",
    "fields.slug": params.slug,
  });

  return {
    props: {
      portfolioItem: data.items[0],
    },
  };
}

export default PortfolioPage;
