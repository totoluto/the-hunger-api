import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card"
import {Container, Row, Col, Button} from "react-bootstrap";
import {useEffect, useState} from "react";

function Delete(){
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((response) => response.json())
            .then((data) => setPersons(data))
    }, [])

    function deletePerson(id){
        fetch('http://localhost:8080/persons/'+id, { method: 'DELETE' })
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            });
    }
    return (

        <Row>

            {persons.map((person, idx) =>
                <Col xs={4}>
                    <Card className={'card'}>
                        <Card.Img variant="top" src={'/img/'+(person.id)+'.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                {person.name}
                            </Card.Title>
                            <Card.Text>
                                Nationality: {person.nationality}
                                <br/>
                                Favorite Weapon: {person.favoriteweapon}
                                <br/>
                                Birthday: {person.birthdate}
                                <br/>
                                Kills: {person.kd}
                                <br/>
                                Sector: {person.sector}
                                <br/>
                                Status: {person.alive ? "Alive" : "Dead"}
                            </Card.Text>
                            <Button variant="danger" onClick={()=>deletePerson(person.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>)}

        </Row>
    )
}

function Update() {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((response) => response.json())
            .then((data) => setPersons(data))
    }, [])
    function updatePerson(id){
        fetch('http://localhost:8080/persons/'+id, { method: 'PUT' })
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            });
    }
    return (

        <Row>

            {persons.map((person, idx) =>
                <Col xs={4}>
                    <Card className={'card'}>
                        <Card.Img variant="top" src={'/img/'+(person.id)+'.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                {person.name}
                            </Card.Title>
                            <Card.Text>
                                Nationality: {person.nationality}
                                <br/>
                                Favorite Weapon: {person.favoriteweapon}
                                <br/>
                                Birthday: {person.birthdate}
                                <br/>
                                Kills: {person.kd}
                                <br/>
                                Sector: {person.sector}
                                <br/>
                                Status: {person.alive ? "Alive" : "Dead"}
                            </Card.Text>
                            <Button variant="danger" onClick={()=>updatePerson(person.id)}>Update</Button>
                        </Card.Body>
                    </Card>
                </Col>)}

        </Row>
    )
}

function Persons() {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((response) => response.json())
            .then((data) => setPersons(data))
    }, [])
    return (

            <Row>

                {persons.map((person, idx) =>
                    <Col xs={4}>
                        <Card className={'card'}>
                            <Card.Img variant="top" src={'/img/'+(person.id)+'.jpg'}/>
                            <Card.Body>
                                <Card.Title>
                                    {person.name}
                                </Card.Title>
                                <Card.Text>
                                    Nationality: {person.nationality}
                                    <br/>
                                    Favorite Weapon: {person.favoriteweapon}
                                    <br/>
                                    Birthday: {person.birthdate}
                                    <br/>
                                    Kills: {person.kd}
                                    <br/>
                                    Sector: {person.sector}
                                    <br/>
                                    Status: {person.alive ? "Alive" : "Dead"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}

            </Row>
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
                            <li className="App-li-nav"><Link to="/" className="navlink">Hungery Games Index
                                オククダサ斎</Link></li>
                            <li className="App-li-nav"><Link to="/tributes" className="navlink">Delete Tributes</Link></li>
                            <li className="App-li-nav"><Link to="/teams" className="navlink">Update</Link></li>
                            <li className="App-li-nav"><Link to="/rankings" className="navlink">Rankings</Link></li>
                            <li className="App-li-nav"><Link to="/contact" className="navlink">Contact</Link></li>
                            <li className="App-li-nav">
                                <label for="search">Search &ensp;</label>
                                <input id="search" type="text" onChange={event => {
                                    setSearchTerm(event.target.value)
                                }}/>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Container>
                    <Routes>
                        <Route path="/" element={<Persons/>}/>
                        <Route path="/tributes" element={<Delete/>}/>
                        <Route path="/teams" element={<Update/>}/>
                        <Route path="/rankings" element={<Persons/>}/>
                        <Route path="/contact" element={<Persons/>}/>
                        <Route path="*" element={
                            <Alert variant={'danger'}>There's nothing here!</Alert>
                        }/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;