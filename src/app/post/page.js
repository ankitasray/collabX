"use client";
import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    alert("Post Created: " + content);
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post..." />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
