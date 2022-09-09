import React, {useEffect, useState} from "react";

function Genre() {

  const [genres, setGenre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/genres")
    .then(response => response.json())
    .then((data) => setAuthor(data));
    }, []);

  return <div>Genre</div>;
}

export default Genre;

