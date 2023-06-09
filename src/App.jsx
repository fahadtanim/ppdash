import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import "semantic-ui-css/semantic.min.css";
import Todo from "./components/Todo/Todo";
import PageLayout from "./components/PageLayout";
import IndivTodo from "./components/Todo/IndivTodo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<PageLayout />}>
            <Route path="todo" element={<Todo />}>
              <Route path=":name" element={<IndivTodo />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
