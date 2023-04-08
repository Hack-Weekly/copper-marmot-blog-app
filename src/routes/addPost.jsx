import '../styles/addPost.css';
import { useState } from "react";
import { Form } from "react-router-dom";
import { addPost } from "../firebase/posts";

export async function action({ request }) {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    const post = await addPost({
        title: values.title,
        content: values.content,
        author: "Author Name" // TODO: add from firebase?
    });


    return { post };
}

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="addPost-ct">
            <Form method="POST">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter your title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    placeholder="Enter your content"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Add Post</button>
            </Form>
        </div>
    );
}