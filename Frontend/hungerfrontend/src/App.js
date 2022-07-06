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

            {persons.map((person) =>
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

function Post() {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNationality, setNewNationality] = useState("")
    const [newWeapon, setNewWeapon] = useState("")
    const [newBirthday, setNewBirthday] = useState("")
    const [newKD, setNewKD] = useState(0.1)
    const [newSector, setNewSector] = useState(0)
    const [newStatus, setNewStatus] = useState(true)
    const ids = persons.map(object => {
        return object.id;
    });

    function post(){
        fetch('http://localhost:8080/persons',
            {method: 'POST', body: JSON.stringify({
                    "id": Math.max(...ids)+1 ,
                    "name": newName,
                    "nationality": newNationality,
                    "favoriteweapon": newWeapon,
                    "birthdate": newBirthday,
                    "kd": newKD,
                    "sector": newSector,
                    "alive": newStatus
                })})
            .then((response) => response.json())
    }
    return(
        <form onSubmit={post}>
            <label for="name">New Tribute Name</label>
            <input type="Text" id="name" onSubmit={()=> setNewName(this.target.value)}/><br/>
            <label for="nationality">New Tributes nationality</label>
            <input type="Text" id="nationality" onSubmit={()=> setNewNationality(this.target.value)}/><br/>
            <label for="weapon">New Tributes Weapon</label>
            <input type="Text" id="weapon" onSubmit={()=> setNewWeapon(this.target.value)}/><br/>
            <label for="birthday">New Tributes birthday</label>
            <input type="date" value="2022-06-06" id="birthday" onSubmit={()=> setNewBirthday(this.target.value)}/><br/>
            <label for="kd">New Tributes K/D</label>
            <input type="number" id="kd" onSubmit={()=> setNewKD(this.target.value)}/><br/>
            <label for="sector">New Tributes Sector</label>
            <input type="number" id="sector" onSubmit={()=> setNewSector(this.target.value)}/><br/>
            <label> is new tribute Alive?</label>
            <div onSubmit={()=>setNewStatus(this.target.value)}>
                <label>Alive</label>
                <input type="radio" id="true" name="status" value="Alive"/>
                <label>Dead</label>
                <input type="radio" id="false" name="status" value="Dead"/><br/>
                <input type="submit" value="Update"/>
            </div>
        </form>
    )
}

function Update(){
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((response) => response.json())
    }, [])
    function UpdatePersons(){

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
                                <form>
                                    <input type="Text"/>
                                    <input type="Text"/>
                                    <input type="Text"/>
                                    <input type="date" value="2022-06-06"/>
                                    <input type="number"/>
                                    <input type="number"/>
                                    <input type="radio" id="Alive" name="status" value="Alive"/>
                                    <input type="radio" id="Dead" name="status" value="Dead"/>
                                    <input type="submit" value="Update"/>
                                </form>

                            </Card.Text>
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
                            <li className="App-li-nav"><Link to="/tributes" className="navlink">Delete</Link></li>
                            <li className="App-li-nav"><Link to="/teams" className="navlink">Update</Link></li>
                            <li className="App-li-nav"><Link to="/rankings" className="navlink">Add</Link></li>
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
                        <Route path="/rankings" element={<Post/>}/>
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