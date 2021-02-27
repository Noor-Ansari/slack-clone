import React, {useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import styled from "styled-components";

function ChatInput({sendChat}) {
    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault()
        if (input){
            sendChat(input)
        }
        setInput("");
    }

    return (
        <Container>
            <ChatContainer>
                <form>
                    <input
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" 
                    placeholder="Message here..." />
                    <SendButton onClick={send} type="submit">
                        <SendIcon/>
                    </SendButton>
                </form>
            </ChatContainer>
        </Container>
    )
}

export default ChatInput;


const Container = styled.div`
`

const ChatContainer = styled.div`
    padding-left : 20px;
    padding-right : 20px;
    padding-bottom : 16px;
    form {
        display : flex;
        align-items : center;
        height : 40px;
        justify-content : space-between;
        border : 1px solid #111111;
        border-radius : 5px;
        input{
            flex : 1;
            border : none;
            margin-left : 10px;
            font-size : 16px;
        }
        input:focus{
            outline : none;
        }
    }
`

const SendButton = styled.button`
    width : 30px;
    height : 30px;
    border : none;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 10px;
    border-radius : 5px;
    color : #222 !important;
    cursor : pointer;
    :hover{
        background : rgb(0, 0, 0, 0.1);
    }
`