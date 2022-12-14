import React, { useState } from 'react';
import './NewPoem.css';

const poemAPI = "http://localhost:9292/poems";

function NewPoemForm({addPoem}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(poemAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author,
        genre
      }),
    })
      .then((r) => r.json())
      .then((newPoem) => addPoem(newPoem));

    setTitle("");
    setContent("");
    setAuthor("");
  }

  return (
    <div className="center">
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input 
        placeholder="Genre" 
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <textarea 
        placeholder="Write your masterpiece here..." 
        rows={20} 
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Share your masterpiece" 
      />
    </form>
    </div>
  );
}

export default NewPoemForm;


