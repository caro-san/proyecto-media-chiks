import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import Custombutton from './components/utilidades/custombutton';
import Home from './components/home/home';
import Navigation from './components/nabvar/navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Resumen from './components/resumen/resumen';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/contact">
              <Contact/>
            </Route>

            <Route exact path="/resumen">
              <Resumen/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
