import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [editText, setEditText] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText === "") return;
    setTodos((prevTodos) => [...prevTodos, inputText]);
    setInputText("");
  };

  const edithandler = (index: number) => {
    console.log("edit handler", index);
    setEditText(todos[index]);
    setEditIndex(index);
    console.log("selected edit", editText, editIndex);
  };

  const deleteHandler = (index: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((_todo, i) => i !== index);
    });
  };

  const doneHandler = (editText: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[editIndex as number] = editText;
      return updatedTodos;
    });

    setEditIndex(undefined);
    setEditText("");
  };

  // console.log(todos);
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
        {todos &&
          todos.map((todo, index) => (
            <div className="todoform">
              {editIndex === index ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    className="edit-btn"
                    onClick={() => doneHandler(editText)}
                  >
                    done
                  </button>
                </>
              ) : (
                <div key={index} className="todo">
                  &bull; {todo}
                </div>
              )}
              <button className="edit-btn" onClick={() => edithandler(index)}>
                edit
              </button>
              <button className="edit-btn" onClick={() => deleteHandler(index)}>
                delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
