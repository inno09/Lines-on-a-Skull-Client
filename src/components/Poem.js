import React, { useState } from 'react';

const poemAPI = "https://poetrydb.org/title/lines";

function Poem({poem}) {
    const {title, lines, author} = poem;
    
  
    return (
      <div>
        <h3>{title}</h3>
        <p>{lines}</p>
        <p><strong>- By {author}</strong></p>
      </div>
    );
  }
  
  export default Poem;