import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import "semantic-ui-css/semantic.min.css";
import Todo from "./components/Todo/Todo";
import PageLayout from "./components/PageLayout";
import IndivTodo from "./components/Todo/IndivTodo";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/authorization/gitlab" element={<Auth />}></Route>
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
