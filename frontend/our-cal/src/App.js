import React from "react";
import "./App.css";
import { Route } from 'react-router-dom'
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/about' component={About} />
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
