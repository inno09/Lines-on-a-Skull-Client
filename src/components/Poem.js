import React, { useState } from 'react';

const poemAPI = "http://localhost:9292/poems";

function Poem({poem, removePoem, addToFavorites}) {
  const {title, content, author} = poem;
  const [isRead, setIsRead] = useState(false)
  // sends a request to delete the poem from the database
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${poemAPI}/${poem.id}`, {
      method: "DELETE",
    });
    removePoem(poem);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>- By {author}</strong></p>
      <div className="poem">
      <button onClick={onDeleteClick} > Delete</button>
      <button onClick={() => addToFavorites(poem)}> {poem.isFavorite ? "Unfavorite" : "⭐Favorite" }</button>
      </div>
    </div>
  );
}

export default Poem;
