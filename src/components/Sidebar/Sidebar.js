import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../../data/sidebarData";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import db from "../../firebase";

function Sidebar({rooms}) {

  const addNewChannels = () => {
    const channelName = prompt("New Channel Name :");
    if (channelName){
      db.collection("rooms").add({
        name : channelName
      })
    }
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
            {item.text}
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
           rooms.map(room=>(
             <Channel>
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
`;

const MainChannelItem = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  padding: 5px 20px;
  height: 30px;
  cursor: pointer;
  :hover {
    background: #350d36;
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
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  line-height: 30px;
  cursor: pointer;
  padding-left: 20px;
  display: flex;
  align-items: center;
  :hover {
    background: #350d36;
  }
`;
