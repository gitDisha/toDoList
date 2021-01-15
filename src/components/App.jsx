import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInputItem(value);
  }

  function handleClick() {
    setListItems((prevItems) => [inputItem, ...prevItems]);
    setInputItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputItem} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
