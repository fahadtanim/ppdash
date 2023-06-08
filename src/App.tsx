import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
