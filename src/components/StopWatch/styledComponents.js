import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left:50px;
    border-radius: 5px;
    background-image:url("https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png");
    background-size:cover;
    height: 100vh;
    @media screen and (max-width:576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:0px;
        background-image:url("https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png");
    }
`

export const Heading=styled.h1`
    color:#333333;
    font-weight: bold;
    margin-left:5%;
`

export const Container=styled.div`
    box-shadow: 0px 4px 16px 0px #bfbfbf;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px;
`

export const TimerCon=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Image=styled.img`
    margin:1px;
`

export const Para=styled.p`
    color:#333333;
    font-weight: 500;
`

export const Time=styled.p`
    color:#333333;
    font-weight: bold;
`

export const ButtonCon=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Start=styled.button`
    background-color: #1db05f;
    color:white;
    border:none;
    padding:10px;
    margin:10px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
`
export const Stop=styled.button`
    background-color: #ef0d36;
    color:white;
    border:none;
    padding:10px;
    margin:10px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
`

export const Reset=styled.button`
    background-color: #eaa800;
    color:white;
    border:none;
    padding:10px;
    margin:10px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
`
