import Head from "next/head";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Aishah's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
