import React from 'react';
import styled from "styled-components";

function Message() {
    return (
        <Container>
            <Avatar>
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
            </Avatar>
            <MessageContainer>
                <Username>
                    Noor Coder <span>12/03/2020 12:30</span>
                </Username>
                <Text>
                    Hello there !!
                </Text>
            </MessageContainer>
        </Container>
    )
}

export default Message;

const Container = styled.div`
    display : flex;
    align-items: center;
    padding : 10px 20px;
    :hover {
        background : rgba(0, 0, 0, 0.1);
    }
`

const MessageContainer = styled.div`
    line-height : 1.5;
`

const Text = styled.div`
    font-size : 14px;
    font-weight : 500;
`

const Username = styled.div`
    font-size : 18px;
    font-weight : 700;
    span{
        font-size : 10px;
        font-weight : 400;
    }
`

const Avatar = styled.div`
    width : 36px;
    height : 36px;
    margin-right : 10px;
    img{
        width : 100%;
    }

`