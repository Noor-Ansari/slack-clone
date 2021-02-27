import React, {useEffect, useState} from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import Message from "../Message/Message";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase"

function Chat({user}) {
  const [channel, setChannel] = useState("");
  const [chat, setChat] = useState([]);
  const {channelId} = useParams();

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snap) => {
        setChannel(snap.data());
      });
  };

  const getChat = () => {
    db.collection("rooms")
    .doc(channelId)
    .collection("chat")
    .orderBy("timestamp", "asc")
    .onSnapshot((snap) => {
      setChat(
      snap.docs.map((doc) => {
        return doc.data()
      }))
    })
  }

  const sendChat = (text) => {
    if (channelId){
    const message = {
      text : text,
      timestamp : firebase.firestore.Timestamp.now(),
      name : user.name,
      image : user.photo
    }
    db.collection("rooms")
    .doc(channelId)
    .collection("chat")
    .add(message)
  }}

  useEffect(()=> {
    getChannel()
    getChat()
  }, [channelId])


  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel.name}</ChannelName>
          <ChannelInfo>This is very important announcement</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div> <Info />{" "}
        </ChannelDetails>
      </Header>
      <ChatArea>
        { chat.length > 0 && 
          chat.map((item, idx) => (
            <Message 
            text={item.text} 
            name={item.name} 
            image={item.image} 
            timestamp={item.timestamp}
            key={idx}
             />
  ))
        }
      </ChatArea>
      <ChatInput sendChat={sendChat} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 77px auto min-content;
  min-height : 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(88, 71, 88, 0.6);
  padding: 20px;
`;

const Channel = styled.div`
  padding: 0 20px;
`;

const ChannelName = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #606060;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

const ChatArea = styled.div`
  display : flex;
  flex-direction : column;
  overflow-y : scroll;
`;
