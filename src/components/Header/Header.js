import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import styled from "styled-components";
import image from "../../assets/user.png";

function Header() {
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
                <p>Noor</p>
                <ImageContainer>
                    <img src={image} alt="" />
                </ImageContainer>
            </Element2>
        </Container>
           
           )
}

export default Header;

const Container = styled.div`
    background : white;
    display : flex;
    align-items : center;
    justify-content : center;
    position : relative;
    padding : 20px;
    background : #2b092b;
    color : white;
`

const Element1 = styled.div`
    display : flex;
    align-items : center;
`

const Element2 = styled.div`
    display : flex;
    align-items : center;
    position : absolute;
    right : 30px;
    p {
        margin : 0 20px;
    }
`

const ImageContainer = styled.div`
    height : 30px;
    width : 30px;
    img {
        width : 100%;
        border : 1px solid white;
        border-radius : 4px;
        marging-left : 20px;
    }
`

const SearchContainer = styled.div`
    margin : 0 20px;
    width : 500px;
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