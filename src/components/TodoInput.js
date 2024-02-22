import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  const handelEnterPress = (e)=>{
    if(e.keyCode === 13){
      props.addList(inputText);
      setInputText('');
    }
  }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your TodDo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handelEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
