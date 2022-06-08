import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="App">
      <header className="App-header">
          <nav className="App-nav">
              <ul className="App-ul-nav">
                  <li className="App-li-nav">Hungery Games Index オククダサ斎</li>
                  <li className="App-li-nav">Tributes</li>
                  <li className="App-li-nav">Teams</li>
                  <li className="App-li-nav">Rankings</li>
                  <li className="App-li-nav">Contact</li>
                  <li className="App-li-nav">
                      <label for="search" >Search &ensp;</label>
                      <input id="search" type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
                  </li>
              </ul>
          </nav>
      </header>
    </div>
  );
}

export default App;
