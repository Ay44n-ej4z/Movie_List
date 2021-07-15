import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import SimpleBottomNavigation from "./Components/MainNav";
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movies/Movies';
import Search from './Components/Pages/Search/Search';
import Series from './Components/Pages/Series/Series';
import { Landing } from './Components/Pages/Search/Landing';
import { Movie } from './Components/Pages/Search/Movie';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store = {store}>
    <Router>
      <Navbar />
      <Switch>
          <Route path = "/signin"  component = {SignIn} /> 
          <Route path = "/signup"  component = {SignUp} />
          <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} /> 
            <Route exact path="/searching" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
      </Switch>
      <SimpleBottomNavigation />
    </Router>
    </Provider>
  );
}

export default App;
