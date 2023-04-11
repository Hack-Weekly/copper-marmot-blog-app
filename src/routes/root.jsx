import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../firebase/posts";
import Post from "../components/post";
// import { createUser } from "../firebase";

// export async function action() {
//   const user = await createUser();
//   return { user };
// }

export async function loader() {
  const posts = await getPosts();
  console.log(posts);
  return { posts };
}

export default function Root() {
  const { posts } = useLoaderData();
  return (
    <>
      <header>
        <Link to={""}>
          <h1>React Router Contacts</h1>
        </Link>
        <div>
          <Link to={"register"}>
            <button>Register</button>
          </Link>
        </div>
        <div>
          <Link to={"login"}>
            <button>Login</button>
          </Link>
        </div>
        <div>
          <Link to={"addPost"}>
            <button>Add Post</button>
          </Link>
        </div>
      </header>
      <div id="detail">
        <Outlet />
        {!posts.empty ? (
          <ul>
            {posts.docs.map((post) => (
              <li key={post.id}>
                <Post
                  title={post.data().title}
                  content={post.data().content}
                  author={post.data().author}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No posts</i>
          </p>
        )}
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
