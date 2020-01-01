import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import ShowContainer from "./containers/ShowContainer";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          {/*  Header component */}
          <Header />
        </header>
        {/*  Set routes to home, about, and show pages */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={About} />
        <Route path="/blocks/:id" component={ShowContainer} />
        <footer>
          {/* Footer component */}
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
