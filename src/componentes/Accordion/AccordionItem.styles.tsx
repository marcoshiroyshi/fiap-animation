import styled from "styled-components";


export const AccordionItemContainer = styled.div `
    margin-bottom: 80px;

    .resposta {
        color: #FFF;
        font-size: 8rem;
        overflow: hidden;
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .active-accordion {
        opacity: 1;
        overflow: visible;
    }

    .content {
        display: none;
        transition: 0.2s ease-in-out;
    }

    .active-content {
        display: block;
    }
`


export const Button = styled.div`
    color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 1px solid #FFF;
    height: 30vh;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 5px solid #ed145b;;
    }

    h1 {
        font-size: 8rem;
        font-weight: 500;
    }

    span {
        font-size: 8rem;
    }

`

export const AccordionContentContainer = styled.div`
    margin-top: 230px;
`