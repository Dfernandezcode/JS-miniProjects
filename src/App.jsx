import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ToDoList from "./projects/ToDoList/ToDoList";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;
