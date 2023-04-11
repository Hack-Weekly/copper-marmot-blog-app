import React from "react";

export default function Post({ title, content, author }) {
  return (
    <>
      <h4>{title}</h4>
      <div>{author}</div>
      <div>{content}</div>
    </>
  );
}
