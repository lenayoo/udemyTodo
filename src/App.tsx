import "./App.css";

function App() {
  return (
    <>
      <h1>To do⛵️</h1>
      <div className="box">
        <form className="todo-form">
          <input className="add-input" />
          <button type="button" className="add-btn">
            add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
