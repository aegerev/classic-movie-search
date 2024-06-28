import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App(){
const[user, setUser] = React.useState(null)

async function login(user = null) {
  setUser(user)
}
async function logout(){
  setUser(null)
}

  return(
    <div className="App">
      <Navbar bg='primary' expand="lg">
        <Navbar.Brand href ="#home">Classic Movie Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link style={{color:"orange"}}>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user? (
                <a onClick={logout}>Logout User</a>
              ): (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
            {/* <Nav.Link href = '#home'>Home</Nav.Link>
            <Nav.Link href = '#link'>Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
        <Route path="/movies/:id/" render={(props) => <Movie {...props} user={user}/>}></Route>
        <Route path="/login" render={(props) => <Login {...props} login={login}/>}></Route>
        </Switch>
    </div>
  )
}

export default App;
