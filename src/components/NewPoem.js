import React, { useState } from 'react';
import './NewPoem.css';


const poemAPI = "http://localhost:3000/poems";

function NewPoem({addPoem}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

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
      }),
    })
      .then((r) => r.json())
      .then((newPoem) => addPoem(newPoem));

    setTitle("");
    setContent("");
    setAuthor("");
  }

  return (
    <div className="new-poem">
        <form className="new-poem-form" onSubmit={handleSubmit} >
        <input 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <input 
            placeholder="Author Name" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea 
            placeholder="Feeling creative..." 
            rows={10} 
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        
        <input 
            type="submit" 
            value="Post" 
        />
        </form>
    </div>
  );
}

export default NewPoem;