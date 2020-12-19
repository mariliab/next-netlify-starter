import PortfolioPage from "../../components/PortfolioPage";

const data = [];

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getServerSideProps({ params }) {
  let entry = await client.getEntries({
    content_type: "portfolioItem",
    "fields.slug": params.slug,
  });

  //const portfolioItemData = Object.entries(entry.items[0].fields);
  const portfolioItemData = entry.items[0].fields;

  return {
    props: {
      portfolioItem: portfolioItemData,
    },
  };
}

export default PortfolioPage;
