import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import Login from "./components/Login/Login";
import db from "./firebase";

function App() {
 const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    db.collection("rooms").onSnapshot((snap)=>{
      setRooms(snap.docs.map((doc)=>{
        return {id : doc.id, name : doc.data().name}
      }))
    })}

    useEffect(() => {
      getRooms();
    }, [])
    
  return (
    <div className="app">
<Router>
      <Container>
        <Header/>
        <Main>
          <Sidebar rooms={rooms} />
          <Switch>
            <Route exact path="/room">
              <Chat/>
            </Route>
            <Route exact path="/">
              <Login/>
            </Route>
          </Switch>
        </Main>
      </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  height : 100vh;
  width : 100%;
  display : grid;
  grid-template-rows : 50px auto;
`

const Main = styled.div`
  display : grid;
  grid-template-columns : 20% auto;
`