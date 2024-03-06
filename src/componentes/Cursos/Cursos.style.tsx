import styled from "styled-components";

export const SCursos = styled.section`
    height: 65vh;
    background-color: #000;

    @media(max-width: 375px) {
        width: 1400px;
        display: none;
    }

    @media(max-width: 600px) {
        height: 100vh;
        width: 1851px;
    }
`

export const CursosContainer = styled.div`
    margin: 0 auto;
    height: 36.25rem;
    width: 84.375rem;

    .content {
        display: none;       
        animation: moving 1.0s ease;
    }

    @keyframes moving {
        from {transform: translateY(20px); opacity: 0;}
        to{transform: translateY(0); opacity: 1;}
    }

    .active-content {
        display: block;        
    }

    @media(max-width:600px) {
        width: 90%;
        height: 100%;
    }
`

export const HeaderCursos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    nav {
        color: #8A959B;
        display: flex;
        gap: 90px;
        font-size: 1.0625rem;
    }

    nav span {
        position: relative;
        cursor: pointer;
        transition: 0.1s ease;
        text-transform: uppercase;
    }

    nav span:after {
        content: "";
        position: absolute;
        background-color:#F80D5A;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 23px;
        transition: 0.3s;

    }

    nav span:hover {
        color: #FFF;
    }

    nav span:hover:after{
        width: 35%;
    }

    .active-tabs {
        color: #FFF;

    }

    .active-tabs::before {
        content: "";
        position: absolute;
        background-color:#F80D5A;
        height: 3px;
        width: 35%;
        left: 0;
        bottom: 23px;
        
    }

    @media (max-width:600px) {

        nav{
            font-size: 3rem;
        }

        nav span:after {
        content: "";
        position: absolute;
        background-color:#F80D5A;
        height: 4px;
        width: 0;
        left: 0;
        bottom: 73px;
        transition: 0.3s;

    }
        .active-tabs::before {
        content: "";
        position: absolute;
        background-color:#F80D5A;
        height: 4px;
        width: 35%;
        left: 0;
        bottom: 71px;
        
    }
        
    }

`
export const ContentContainer = styled.div`
    width: 700px;
    height: 374px;
    margin-top: 4rem;
    

    h1 {
        color: #FFF;
        font-size: 3.4375rem;
        font-weight: 500;
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 5rem;
        }
    }
`


export const ItemContainer = styled.div`   
    margin-top: 4rem;

`
