import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BeerList from './components/BeerList/BeerList'

function App() {
  return (
    <div className="App">
      <Header/>
          <div>some content</div>
          <BeerList />
      <Footer/>
    </div>
  );
}

export default App;
