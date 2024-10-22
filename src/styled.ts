import styled from "styled-components";

const Image = styled.div.attrs<{ $image: string }>(props => ({
    $image: props.$image
}))`
    width:86px;
    height:86px;
    margin: 5px auto;
    background-image: ${props => `url(${props.$image})`};  
`

const Outer = styled.div`
    border: 1px solid #999;
    max-width: 200px;
    min-height: 350px;
    font-size: 13px;
    font-weight: 500;
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div {
        display: block;
        padding: 1px 5px;
        text-align: start;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    div:hover{
        overflow: visible;
        white-space: normal;
        height:auto;
        border: 2px ridge white;
        z-index: 100;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
  `
const OuterContainer = styled.div`
    min-width: 1430px;
    overflow: auto;
    padding: 15px;
    background: #d5d7df;
    margin: 5px 0;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    text-align: center;
`
const Header = styled.h3`
    color: blue;
`
const Form = styled.form`
    min-width: 1430px;
    display: grid;
    grid-template-columns: auto auto;
    background: #333;
    label {
        color: white;
        margin: 3px 10px 3px auto;
        width: 50px;
        }
    input, select {
            max-width: 150px;
            margin: 3px auto 3px 10px;
        }

    button {
        margin: 3px -80px 3px auto;
        width: 70px;
    }
`
export { Form, Inner, Outer, OuterContainer, Image, Container, Header }