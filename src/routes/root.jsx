import { Outlet, Link } from "react-router-dom";
// import { createUser } from "../firebase";

// export async function action() {
//   const user = await createUser();
//   return { user };
// }

// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

export default function Root() {
  // const { contacts } = useLoaderData();
  return (
    <>
      <header>
        <Link to={"/"}>
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
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
