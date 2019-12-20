import React from "react";
import "./App.css";
import NewBlockContainer from "./containers/NewBlockContainer";
import CardContainer from "./containers/CardContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <NewBlockContainer />
        <br />
        <CardContainer />
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
