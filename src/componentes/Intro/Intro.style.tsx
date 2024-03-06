import styled from "styled-components";

export const SIntro = styled.section`
    position: relative;
    height: 140vh;
    color: #FFF;
    background-color: #000;
    overflow: hidden;

    .container-slider {
        position: relative;
        width: 800%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-bottom: 1px solid #FFF;
        
    }

    .right {
        animation: slider-left 15s linear infinite;
    }

    .left {
        width: -190%;
        animation: slider-left 15s linear infinite reverse;
    }

    .slide {
        display: flex;
        gap: 90px;
    }

    .slide-text {
        font-weight: 500;
        font-size: 5.1875rem;
    }

    @keyframes slider-left {
        0% { left: 0; }
        100% { left: -100%; }
    }

    @media(max-width: 375px) {
        width: 1500px;
        height: 80vh;


        .slide-text{
            font-size: 8rem;
        }
    }

    @media(max-width: 600px) {
        height: 50vh;
    }
` 
export const Middle = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`
export const ContainerGsap = styled.div`
    position: absolute;
    height: 400px;
    bottom: 100px;
    width: 1700px;

`

export const ContainerLeftGsap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: absolute;
    bottom: 18rem;
    width: fit-content;
    
    

    @media(max-width: 600px) {
        display: none;
    }
`

export const ContainerRightGsap = styled.div`
    position: absolute;
    bottom: 10rem;
    display: flex;
    gap: 30px;
    width: fit-content;

    @media(max-width: 600px) {
        display: none;
    }
`

