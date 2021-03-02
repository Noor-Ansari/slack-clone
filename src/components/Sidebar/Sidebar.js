import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../../data/sidebarData";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import db from "../../firebase";
import { useHistory } from "react-router-dom";

function Sidebar({rooms}) {
  const history  = useHistory()

  const addNewChannels = () => {
    const channelName = prompt("New Channel Name :");
    if (channelName){
      db.collection("rooms").add({
        name : channelName
      })
    }
  }

  const goToChannel = (channelId) => {
    history.push(`/room/${channelId}`)
  }

  return (
    <Container>
      <WorkSpace>
        <Name>Noor Coder</Name>
        <WorkSpaceIcon>
          <AddCircleOutlineIcon />
        </WorkSpaceIcon>
      </WorkSpace>
      <MainChannels>
        {sidebarItems.map((item, idx) => (
          <MainChannelItem key={idx}>
            {item.icon}
            <p>{item.text}</p>
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelContainer>
        <NewChannelContainer>
          Channels
          <AddSharpIcon onClick={addNewChannels}/>
        </NewChannelContainer>
        <ChannelsList>
         {
           rooms.map((room, idx)=>(
             <Channel key={idx} onClick={() => goToChannel(room.id)}>
               # {room.name}
            </Channel>
           ))
         }
        </ChannelsList>
      </ChannelContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #791984;
`;

const WorkSpace = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid black;
`;

const Name = styled.div`
  font-size: 20px;
`;

const WorkSpaceIcon = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: white;
  fill: #3f0e40;
  color: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MainChannels = styled.div`
  color: rgb(188, 170, 188);
  padding: 10px 0;
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
`;

const MainChannelItem = styled.div`
  display : flex;
  padding: 5px 15px;
  height: 40px;
  font-size : 16px;
  cursor: pointer;
  p {
    margin-left : 10px;
  }
  :hover {
    background: #350d36;
  }
  @media (max-width: 650px) {
    height : 50px;
    p {
      font-size : 14px;
    }
  }
  @media (max-width: 380px) {
    p {
      font-size : 12px;
    }
  }
  @media (max-width: 250px) {
    justify-content : center;
    p {
      display : none;
    }
  }
`;


const ChannelContainer = styled.div`
  color: rgb(188, 170, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  padding-left: 20px;
  padding-right: 12px;
  @media (max-width: 380px) {
    justify-content : space-evenly;
    padding : 12px;
  }
`;

const ChannelsList = styled.div`
display : flex;
flex-direction : column;
flex-wrap : wrap;
`;

const Channel = styled.div`
  line-height: 40px;
  cursor: pointer;
  padding-left: 20px;
  display: flex;
  flex-wrap : wrap;
  align-items: center;
  :hover {
    background: #350d36;
  }
  @media (max-width: 650px) {
    font-size : 14px;
   }
  @media (max-width: 380px) {
   font-size : 12px;
  }
  @media (max-width: 250px) {
    display : none;
  }
`;
