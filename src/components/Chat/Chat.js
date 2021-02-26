import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput";
import Message from "../Message/Message";

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># Noor</ChannelName>
          <ChannelInfo>This is very important announcement</ChannelInfo>
        </Channel>
        <ChannelDetails><div>Details</div> <Info/> </ChannelDetails>
      </Header>
      <ChatArea><Message/><Message/></ChatArea>
      <ChatInput/>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    border-bottom : 1px solid rgba(88, 71, 88, 0.6);
    padding : 20px;
`;

const Channel = styled.div`
    padding : 0 20px;
`;

const ChannelName = styled.div`
 font-size : 22px;
 font-weight : 700;
`;

const ChannelInfo = styled.div`
    font-size : 14px;
    font-weight : 400;
`;

const ChannelDetails = styled.div`
    display : flex;
    align-items : center;
    margin-right : 20px;
    color : #606060;
`;

const Info = styled(InfoOutlinedIcon)`
    margin-left : 10px;
`

const ChatArea = styled.div``;

