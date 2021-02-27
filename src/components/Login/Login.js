import React from 'react';
import styled from "styled-components";
import {auth, provider} from "../../firebase";

function Login({setUser}) {

    const logIn = () => {
        auth.signInWithPopup(provider)
        .then((response)=> {
            const newUser = {
                name : response.user.displayName,
                photo : response.user.photoURL
            }
            localStorage.setItem("user", JSON.stringify(newUser))
            setUser(newUser)
         } )
    }

    return (
        <Container>
            <Card>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="logo" />
                <h1>Sign in Slack-clone</h1>
                <SlackButton onClick={logIn}>Sign in with Google</SlackButton>
            </Card>
        </Container>
    )
}
 
export default Login

const Container = styled.div`
    width : 100%;
    height : 100vh;
    background : rgba(55, 55, 180, 0.3);
    display : flex;
    align-items : center;
    justify-content : center;
`

const Card = styled.div`
    background : #fff;
    border-top : 35px solid #222;
    border-bottom : 35px solid #222;
    display : flex;
    padding : 20px;
    height : 440px;
    width : 380px;
    flex-direction : column;
    justify-content : center; 
    align-items : center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius : 10px;
    h1{
        font-family : Arial, sans-serif;
    }
`

const SlackImg = styled.img`
    height : 100px;
    width : 100px;
    object-fit : contain;
    margin-bottom : 30px;
`

const SlackButton = styled.button`
    height : 30px;
    padding : 0 10px;
    font-size: 14px;
    background : rgba(0, 150, 0, 0.9);
    color : #fff;
    border-radius : 5px;
    border : none;
    margin-top : 20px;
    transition-duration : 0.3s; 
    :hover{
        background : rgba(0, 150, 0, 0.8);
    }
    :focus{
        outline : none;
    }
`

