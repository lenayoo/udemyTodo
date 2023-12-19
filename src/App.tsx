import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputText]);
    setInputText("");
  };

  console.log(todos);
  return (
    <>
      <h1>To do⛵️</h1>
      <div className="box">
        <form className="todo-form" onSubmit={submitHandler}>
          <input
            className="add-input"
            onChange={changeHandler}
            value={inputText}
          />
          <button type="submit" className="add-btn">
            add
          </button>
        </form>
        {todos && todos.map((todo, index) => <div key={index}>{todo}</div>)}
      </div>
    </>
  );
}

export default App;
