import React from 'react';
import './App.css';
import NewBlockContainer from "./containers/NewBlockContainer";
import CardContainer from "./containers/CardContainer";
import CodeWitchLogo from './CodeWitchLogo.png'

function App() {
  return (
    <div className="App">
        <header>
            <h1>OurCal: Community Graphghan</h1>
        </header>
        <NewBlockContainer />
        <br/>
        <CardContainer />
        <footer>
            <ul>
                <li>©2019 Audrea Cook</li>
                <li><img src={CodeWitchLogo} alt="AudTheCodeWitch Logo" height="50px"/></li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
