import Head from "next/head";
import { Blog } from "../../modules/Blog/Blog";
import { usePosts } from "../../hooks/usePosts";

export default function BlogPage() {

  const post = usePosts();

  return (
    <>
      <Head>
        <title>Maria Gonza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons-medium.png" />
      </Head>
      <Blog {...post} />
    </>
  );
}
