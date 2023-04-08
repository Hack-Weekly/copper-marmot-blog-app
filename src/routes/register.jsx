import { Form } from "react-router-dom";
import { useState } from "react";

import { createUser } from "../firebase/users";

export async function action({ request }) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const user = await createUser(values.mail, values.password);
  return { user };
  //   console.log("action");
  //   return null;
}

export default function Register() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <p>hello from register</p>
      <Form method="POST">
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="Enter your mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </Form>
    </>
  );
}
