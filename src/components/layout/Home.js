import Feed from "../pages/Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home home">
      {posts?.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
//posts.length not working
