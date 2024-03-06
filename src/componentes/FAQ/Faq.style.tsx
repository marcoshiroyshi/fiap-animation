import styled from "styled-components";

export const SFaq = styled.section`
    height: 65vh;
    background-color: #000;

    @media(max-width: 375px) {
        padding: 0 90px;
        width: 1400px;
        height: 170vh;
        margin-top: 400px;
        
    }

    @media(max-width: 600px) {
        height: 150vh;
        width: 1851px;
    }
`

export const FaqContainer = styled.div`
    margin: 0 auto;
    height: 36.25rem;
    width: 84.375rem;

    @media(max-width: 600px) {
        width: 90%;
        height: 100%;
    }
`

export const DuvidasContainer = styled.div`
    display: grid;
    margin-top: 90px;
    padding-top: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    height: 300px;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 400px;
        margin-right: 25px;
        
        margin-top: 10px;
        
        
    }
    
    div h2 {
        color:#949B99;
        font-size: 1.25rem;
    }

    div h2:after {
        content: "";
        position: absolute;
        background-color:#949B99;
        height: 1px;
        width: 20%;
        left: 0;
        bottom: 120px;
        transition: 0.5s;
    }

    .title:after {
        bottom: 160px;
    }

    h2:hover{
        color: #FFF;
        opacity: 1;
    }

    div:hover h2:after {
        background-color: #ed145b;
        width: 100%;
    }

    .paragrafo {
        color: #949B99;
        font-size: 16px;
        margin-top: 10px;
        opacity: 0;
        transition: 0.3s ease;
    }

    div:hover .paragrafo{
        opacity: 1;
        
    }


    @media(max-width: 375px) {
        grid-template-columns: 1fr;
        gap: 40px;
        
        

        div {
            width: 1300px;
            min-height: 500px;
            

        }

        div h2 {
            margin-top: 40px;
            font-size: 5rem;
        }

        .paragrafo {
            font-size: 4rem;
            overflow: scroll;
            
        }

        .title:after {
        bottom: 550px;
    }

        div h2:after {
            content: "";
            position: absolute;
            background-color:#949B99;
            height: 8px;
            width: 20%;
            left: 0;
            bottom: 500px;
            transition: 0.5s;
    }

    }

    @media(max-width:600px) {
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        

        div {
            width: 800px;
            margin-bottom: 80px;
        }
        div h2 {
            font-size: 3rem;
        }

        .paragrafo {
            font-size: 2rem;
        }

        div h2:after {
        content: "";
        position: absolute;
        background-color:#949B99;
        height: 10px;
        width: 20%;
        left: 0;
        bottom: 230px;
        transition: 0.5s;
    }

        .tablet:after {
            bottom: 250px;
        }

        .tablet-grid:after {
            bottom: 340px;
        }

        .tablet-row:after {
            bottom: 240px;
        }

        .row-1:after {
            bottom: 230px;
        }
    }

`

