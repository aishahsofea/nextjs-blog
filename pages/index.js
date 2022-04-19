import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getiing started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getiing started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getiing started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getiing started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React framework for production",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
