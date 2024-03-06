import styled from "styled-components";

export const SItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    border-bottom: 1px solid #FFF;
    height: 50px;
    width: 800px;
    
    
    
    h3 {
        color: #8A959B;
        font-size: 1.375rem;
        font-weight: 400;
    }

    span {
        color:#8A959B;
        font-size: 0.8125rem;

    }

    @media(max-width: 375px) {
        align-items: start;
        flex-direction: column-reverse;
        padding-bottom: 60px;
        width: 1300px;
        margin-top: 310px;
    
        h3 {
            font-size: 5rem;
        }

        span {
            font-size: 3rem;
        }
    }

    @media(max-width:600px) {
        width: 1600px;
        margin-top: 70px;

        h3 {
            font-size: 2.4rem;
        }

        span {
            font-size: 2rem;
        }
    }
`

