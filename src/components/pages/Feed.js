import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      <h1>feed</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
