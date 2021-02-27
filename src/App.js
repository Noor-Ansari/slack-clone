import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import Login from "./components/Login/Login";
import db, {auth} from "./firebase";

function App() {
 const [rooms, setRooms] = useState([]);
 const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  const getRooms = () => {
    db.collection("rooms").onSnapshot((snap)=>{
      setRooms(snap.docs.map((doc)=>{
        return {id : doc.id, name : doc.data().name}
      }))
    })}

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.clear()
      setUser(null)
    })
  }

    useEffect(() => {
      getRooms();
    }, [])
    
  return (
    <div className="app">
<Router>
  {
    !user ?  <Login setUser={setUser}/>
    :(
      <Container>
        <Header user={user} signOut={signOut}/>
        <Main>
          <Sidebar rooms={rooms} />
          <Switch>
            <Route path="/room/:channelId">
              <Chat user={user} />
            </Route>
            <Route path="/">
              Go and create a new channel 
            </Route>
          </Switch>
        </Main>
      </Container>
      )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  height : 100vh;
  width : 100%;
  display : grid;
  grid-template-rows : 50px minmax(0, 1fr);
`

const Main = styled.div`
  display : grid;
  grid-template-columns : 20% auto;
`