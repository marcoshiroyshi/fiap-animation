import styled from "styled-components";

export const SHero = styled.section`
    background-color: #000;
    color: #FFF;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    
   
    
    div {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: start;
        height: 20vh;
    }

    h1 {
        font-weight: 500;
        font-size: 6.875rem;
        z-index: 1;
    }

    #text-2 {
        position: absolute;
        top: 5.6rem;
        left: -5rem;
    }

    h2 {
        position: absolute;
        font-weight: 900;
        font-size: 21.875rem;
        color: #0b0c0d;
        position: absolute;
        z-index: 0;
        left: -5rem;

    }

    @media(max-width: 375px) {
        width: 1500px;
        min-height: 140vh;
    }

    
`