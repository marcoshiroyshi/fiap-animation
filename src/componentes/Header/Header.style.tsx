import styled from 'styled-components'

export const SHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;

    #logo-mobile {
        display: none;
    }

    @media(max-width: 375px) {
        height: 200px;
        
    #logo-mobile {
        display: block;
    }

    #logo-desktop {
        display: none;
    }
    }
`

export const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: #ed145b;
    border-radius: 20px;
`