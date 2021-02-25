import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
<Router>
      <Container>
        <Header/>
        <Main>
          <Sidebar/>
        <Switch>
          <Route path="/room">
          <Chat/>
          </Route>
          <Route path="/">
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