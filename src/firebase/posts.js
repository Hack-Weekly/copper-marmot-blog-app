import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export function addPost(post) {
    const title = post.title;
    const content = post.content;
    const author = post.author;

    return addDoc(collection(db, "posts"), {
        title,
        content,
        author,
        createdAt: serverTimestamp()
    });
}