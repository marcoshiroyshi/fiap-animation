import styled from "styled-components"

interface ITitle {
    title: string,
    subtitle: string
}

const STitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 25%;
    
    

    #title {
        font-size: 5.75rem;
        color: #FFF;
        line-height: 83px;
        font-weight: 500;
    }

    #subtitle {
        font-size: 1.375rem;
        color: #F80D5A;
        font-weight: 500;

    }

    @media (max-width:375px) {
        margin-top: 30px;
        width: 100%;
        gap: 80px;
        height: 40%;
        

            #title {
            font-size: 10rem;
        }
        
            #subtitle {
            font-size: 5rem;
            color: #F80D5A;

        }
    }

    @media(max-width: 600px) {
        gap: 10px;
       #title {
        font-size: 7rem;
       }

       #subtitle {
        font-size: 2rem;
       }
    }

`

const Title = ({title, subtitle}:ITitle) => {
    return(
        <STitle>
            <h1 id="title" >{title}</h1>
            <h3 id="subtitle">{subtitle}</h3>
        </STitle>
    )
}

export default Title