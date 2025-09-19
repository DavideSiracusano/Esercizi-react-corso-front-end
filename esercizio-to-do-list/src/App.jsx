import React, { useState } from "react";
import ToDoForm from "./components/organisms/ToDoForm";
import ToDoList from "./components/organisms/ToDoList";

import "./App.css";

function App() {
  //  SINGLE SOURCE OF TRUTH: tutto lo stato centralizzato!
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [nextId, setNextId] = useState(1);

  // Tutti i dati derivati calcolati dallo stato centrale
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  // 🔄 Funzioni che modificano SOLO lo stato centrale

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId,
        text: text,
        completed: false,
      },
    ]);
    setNextId(nextId + 1);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="app-container">
      {/*  L'interfaccia si basa SOLO sullo stato centrale */}
      <h1>Todo App</h1>

      <div className="toDo-Form">
        {/* il nome del props deve rispettare quello che deve ricevere l'organismo */}
        <ToDoForm addTodo={addTodo} />
      </div>

      <div className="toDo-List">
        <ToDoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div>
        <span>{activeCount} attività rimanenti</span>
      </div>
    </div>
  );
}

export default App;
