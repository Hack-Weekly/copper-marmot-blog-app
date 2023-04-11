import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

export function addPost(post) {
  const title = post.title;
  const content = post.content;
  const author = post.author;

  return addDoc(collection(db, "posts"), {
    title,
    content,
    author,
    createdAt: serverTimestamp(),
  });
}

export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));

  return querySnapshot;
}
