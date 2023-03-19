import { useRouter } from "next/router";

export default function CommentPage(props: any) {
  const { post } = props;

  return (
    <>
      <h1>Post: {post.name}</h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  console.log("akinasdas", context.params);

  const response = await fetch(
    "http://localhost:3000/locale/" + context.params.slug
  ).then((res) => res.json());

  return {
    // Passed to the page component as props
    props: { post: response },
    revalidate: 1,
  };
}
