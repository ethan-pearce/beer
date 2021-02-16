import React, { useState } from 'react';
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
import { BeerProvider } from './BeerContext'

function App() {
  const [beer, setBeer] = useState({});
  const toggleBeer = (beerToShow) => setBeer(beerToShow);

  return (
    <Router>
      <BeerProvider value={{beer, toggleBeer}}>
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
      </BeerProvider>
    </Router>
  );
}

export default App;
