import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Alert from "react-bootstrap/Alert";
import {useEffect, useState} from "react";

function Persons(){
    const [persons,setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((response)=>response.json())
            .then((data)=> setPersons(data))
    } ,[])
    return(
        <>
            <div> Haha Hamburger Lady </div>
            {persons.map(person =>  <div>
                {
                    person.id + '-' +
                    person.name +
                    person.nationality +
                    person.favoriteweapon +
                    person.birthdate +
                    person.kd +
                    person.sector +
                    person.alive  }
            </div> ) }
        </>
    )
}

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="App">
            <BrowserRouter>
            <header className="App-header">
                <nav className="App-nav">
                    <ul className="App-ul-nav">
                        <li className="App-li-nav"><Link to="/" className="navlink">Hungery Games Index オククダサ斎</Link></li>
                        <li className="App-li-nav"><Link to="/tributes" className="navlink">Tributes</Link></li>
                        <li className="App-li-nav"><Link to="/teams" className="navlink">Teams</Link></li>
                        <li className="App-li-nav"><Link to="/rankings" className="navlink">Rankings</Link></li>
                        <li className="App-li-nav"><Link to="/contact" className="navlink">Contact</Link></li>
                        <li className="App-li-nav">
                            <label for="search" >Search &ensp;</label>
                            <input id="search" type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
                        </li>
                    </ul>
                </nav>
            </header>
                <Routes>
                    <Route path="/" element={<Persons/>} />
                    <Route path="/tributes" element={<Persons/>} />
                    <Route path="/teams" element={<Persons/>} />
                    <Route path="/rankings" element={<Persons/>} />
                    <Route path="/contact" element={<Persons/>} />
                    <Route path="*" element={
                        <Alert variant={'danger'}>There's nothing here!</Alert>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;