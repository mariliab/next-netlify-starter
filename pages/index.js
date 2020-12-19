import StartPage from "../components/StartPage";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "startPage",
    include: 5,
  });

  if (!entries.items) {
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const startPageData = [];

  entries.items[0].fields.content.map((item) => {
    if (item?.sys?.contentType?.sys?.id) {
      startPageData.push({
        id: item?.sys?.contentType?.sys?.id,
        content: item.fields,
      });
    }
  });

  return {
    props: {
      startPageData: startPageData,
    },
    revalidate: 10,
  };
}

export default StartPage;
