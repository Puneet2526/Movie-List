import './App.css';
import './nav.css'
import './movie.css'
import './footer.css'


import Navbar from './navbar';
import Home from './home';
// import About from './b';
import { useState } from 'react';
import SeriesList from './home';
import MoviesList from './MoviesList';
import Footer from './Footer';
import Starbucks from './starbucks';
import About from './about';
import Add from './add';
import Error from './404';
import Favourites from './favourities';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {

  return (
    <Router>
      <div className="App" >
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  //    {/* <MoviesList/> */ }

  // {/* <Starbucks /> */ }
     

     
  
    
  );
}

export default App;
