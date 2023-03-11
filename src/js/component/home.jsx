import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  //if something was in the "" below it woul show up in text box on browser
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [showTrash, setShowTrash] = useState(false);

  //add into array -> concat
  //delete from array-> filter
  //update -> map
  // trash can fas fa-trash-alt
  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <ul >
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                console.log(e.key);
                setToDos(toDos.concat(inputValue));
                setInputValue("");
                //the line above setInputValue(""); when u add something in the text and enter it erases it from the text bar
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {toDos.map((item, index) => (
          <li className="d-flex" 
          onMouseEnter={() => setShowTrash(true)}
          onMouseLeave={() => setShowTrash(false)}>
            {item}
            <i
              className= {showTrash ? "fas fa-trash-alt d-block" : "fas fa-trash-alt d-none"}
              onClick={() =>
                setToDos(
                  toDos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
        {/*the {item} before i added it when i hit enter the words i types would not appear the only thing there was the icon  */}
      </ul>
      <div>{toDos.length}</div>
      
    </div>
  );
};

export default Home;
