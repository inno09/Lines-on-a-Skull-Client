import React from "react";
import Poem from "./Poem";


function PoemsContainer({poems, removePoem, addToFavorites}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem => {
        return (
          <Poem 
            key={poem.id} 
            poem={poem} 
            removePoem={removePoem} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default PoemsContainer;
