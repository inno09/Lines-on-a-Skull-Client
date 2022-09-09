import React, {useEffect, useState} from "react";

function Author() {

  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/authors")
    .then(response => response.json())
    .then((data) => setAuthor(data));
    }, []);

  return (
   <div>
    
   </div>);
}

export default Author;