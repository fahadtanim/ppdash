import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login}></Route>
          <Route>
          <Navbar></Navbar>
          <Route path = "/todo" component={Home}></Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App
