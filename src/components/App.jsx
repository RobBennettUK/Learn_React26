import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [click, setClick] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClick() {
    setClick(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {click}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// Using a form with React, you should set the value of the form to event.target.value
// This makes it a controlled component with a single source of truth
// https://reactjs.org/docs/forms.html#controlled-components

// The default behaviour of a button within a form is for it to refresh
// It triggers a method on the form called onSubmit
// This means we could move the onClick={handleClick} into the form as onSubmit={handleClick}
// We can prevent the form automatically refreshing by typing: event.preventDefault();
