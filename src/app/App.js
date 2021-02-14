import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BeerList from '../components/BeerList/BeerList'
import BeerInfo from '../components/BeerInfo/BeerInfo'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
              <Route path="/beer-info/:beerId">
                <BeerInfo />
              </Route>
              <Route path="/">
                <BeerList />
              </Route>
            </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
