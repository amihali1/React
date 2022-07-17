import './App.css';

function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoList todos={todos} /> {/* components must begin with capital letter */}
    </div>
  );
}

function ToDoList(props){
  console.log(props);
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default App;
