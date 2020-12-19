import PortfolioPage from "@components/PortfolioPage";

// const data = [];

// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// const client = require("contentful").createClient({
//   space: space,
//   accessToken: accessToken,
// });

// export async function getStaticProps() {
//   const portfolioData = await client.getEntries({
//     content_type: "portfolioBlock",
//     include: 3,
//   });
//   if (!portfolioData.items) {
//     console.log(`Error getting Entries for ${contentType.name}.`);
//   }

//   return {
//     props: {
//       data: portfolioData.items[0].fields,
//     },
//   };
// }

export default PortfolioPage;
