/* eslint-disable no-unreachable */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.scss";
import ToDoForm from "../../components/ToDoComponents/ToDoForm";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const id = uuidv4();
  const addTodo = (title) => {
    setToDos((currentTodos) => {
      return [...currentTodos, { id, title, completed: false }];
    }); // add the new item to the list of todos.
  };

  const toggleTodo = (id, completed) => {
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setToDos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  //EDIT FUNCTIONALITY
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const editTodo = (id, updatedFields) => {
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...updatedFields };
        }
        return todo;
      });
    });
  };

  const handleEditClick = (id) => {
    setIsEditing(true);
    setEditId(id);
    const todoToEdit = toDos.find((todo) => todo.id === id);
    setEditValue(todoToEdit.title);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveClick = () => {
    if (editId) {
      editTodo(editId, { title: editValue });
      setIsEditing(false);
      setEditId(null);
    }
  };

  return (
    <main className="todolist">
      <h1 className="todolist__header">To Do List</h1>
      <div className="todoApp">
        <ToDoForm onSubmit={addTodo} />
        <div className="todo">
          <h1 className="todo__header">Tasks:</h1>
          <ul className="todo__list">
            {toDos.map((toDo) => (
              <li className="todo__list--item" key={toDo.id}>
                <label key={toDo.id}>
                  <input className="todo__list--checkbox" type="checkbox" checked={toDo.completed} onChange={(e) => toggleTodo(toDo.id, e.target.checked)} />
                </label>
                <div className="todo__container">
                  {isEditing && toDo.id === editId ? (
                    <div className="todo__taskbox">
                      <input className="todo__taskbox--input" value={editValue} onChange={handleInputChange} />
                      <button className="todo__taskbox--btn btn-save" onClick={handleSaveClick}>
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="todo__taskbox">
                      <span className="todo__taskbox--task">{toDo.title}</span>
                      <div className="todo__taskbox--btnbox">
                        <button className="todo__taskbox--btn btn-delete" type="button" onClick={() => deleteTodo(toDo.id)}>
                          Delete
                        </button>
                        <button className="todo__taskbox--btn btn-edit" type="button" onClick={() => handleEditClick(toDo.id)}>
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ToDoList;
