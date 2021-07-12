import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SimpleBottomNavigation from "./Components/MainNav";
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movies/Movies';
import Search from './Components/Pages/Search/Search';
import Series from './Components/Pages/Series/Series';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          {/* <Route exact path = "/"  component = {Home} /> */}
          <Route path = "/signin"  component = {SignIn} />
          <Route path = "/signup"  component = {SignUp} />
          <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
      </Switch>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
