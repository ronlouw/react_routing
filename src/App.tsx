import React from 'react';
import './App.css';
import Homepage from './Pages/HomePage';
import DiscoverMoviePages from './Pages/DiscoverMoviesPage';
import AboutPage from './Pages/AboutPage';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviePages} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
