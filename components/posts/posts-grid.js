import PostItem from "./post-item";
import classes from "./posts-grod.module.css";

function PostsGrid() {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
