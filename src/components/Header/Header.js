import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import styled from "styled-components";

function Header({user, signOut}) {
    return (
        <Container>
            <Element1>
                <AccessTimeIcon/>
                    <SearchContainer>
                        <input type="text" placeholder="Search..." />
                    </SearchContainer>
                <HelpOutlineIcon/>
            </Element1>
            <Element2>
                <p>{user.name}</p>
                <ImageContainer onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://suryahospitals.com/jaipur/wp-content/uploads/sites/3/2020/07/user-dummy-200x200-1.png"} alt="" />
                </ImageContainer>
            </Element2>
        </Container>
        )
}

export default Header;

const Container = styled.div`
    background : white;
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
    position : relative;
    background : #2b092b;
    color : white;
    width : 100%;
    @media (max-width: 650px) {
        justify-content : space-between;
        padding : 15px;
      }
      @media (max-width: 370px) {
        padding : 5px;
      }
`

const Element1 = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-wrap : wrap;
`

const Element2 = styled.div`
    display : flex;
    align-items : center;
    position : absolute;
    flex-wrap : wrap;
    right : 40px;
    p {
        margin : 0 16px;
    }
    @media (max-width: 650px) {
        p {
            margin : 0 10px;
            font-size : 12px;
        }
      }
      @media (max-width: 380px) {
        p {
            display : none;
        }
      }
`

const ImageContainer = styled.div`
    height : 30px;
    width : 30px;
    cursor : pointer;
    img {
        width : 100%;
        border : 1px solid white;
        border-radius : 4px;
        marging-left : 10px;
    }
    @media (max-width: 370px) {
        img {
            margin-left : 5px;
            margin-right : 0;
        }
`

const SearchContainer = styled.div`
    margin : 0 20px;
    width : 35vw;
    input {
        width : 100%;
        padding : 10px;
        border : 2px solid rgba(233, 233, 241, 0.867);
        background : transparent;
        border-radius : 5px;
        color : white;
    }
    input:focus{
        outline : none;
    }
    input::placeholder{
        color : white;
    }
`