import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path = "/"  component = {Home} />
          <Route path = "/signin"  component = {SignIn} />
          <Route path = "/signup"  component = {SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
