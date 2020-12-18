import { useRouter } from "next/router";
import PortfolioPage from "@components/PortfolioPage";

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`);
//   const post = await res.json();

//   // Pass post data to the page via props
//   return { props: { post } };
// }

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
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
