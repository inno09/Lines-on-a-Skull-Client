import React, { useState } from 'react';

const poemAPI = "http://localhost:9292/poems";

function NewPoemForm({addPoem}) {
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
    <div className="center">
    <form>
  //               <div className="txt-field">
  //               <input
                    type="text" required />
                    <label>Title</label>
                    </div>
                    <div className="txt-field">
                    <textarea
                    type="text" required />
                    <label>Content</label>
                    </div>
                    <div className="txt-field">
                    <input
                    type="number" required />
                    <label>Likes</label>
                    </div>
                    <div className="txt-field">
                    <input
                    type="number" required />
                    <label>Author-id</label>
                    </div>
                    <div className="txt-field">
                    <input
                    type="number" required />
                    <label>Genre-id</label>
                    </div>
                    <input id="submit" type="submit" value="SHARE YOUR THOUGHTS"/>
                </form>
    </div>
  );
}

export default NewPoemForm;


