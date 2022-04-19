import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
