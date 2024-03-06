
import { useState } from "react"
import Item from "../ItemContent/Item"
import Title from "../Title"
import { ContentContainer, CursosContainer, HeaderCursos, ItemContainer, SCursos } from "./Cursos.style"

const Cursos = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return(
        <SCursos>
            <CursosContainer>
                <HeaderCursos>
                    <Title
                        title="Cursos"
                        subtitle="Cursos de curta duração"
                    />
                    <nav>
                        <span 
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                        >Tecnologia</span>
                        <span className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                        >Inovação</span>
                        <span className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                        >Negócios</span>
                    </nav>
                </HeaderCursos>
                <ContentContainer className={toggleState === 1 ? "content active-content" : "content"}>
                    <h1>Tecnologia</h1>
                        <ItemContainer>
                            <Item 
                            titulo="Big Data Ecosystem"
                            subtittulo="remoto • live"/>
                            <Item 
                            titulo="Creating Dashboards for BI"
                            subtittulo="remoto • live"/>
                            <Item 
                            titulo="Big Data Science - Machine Learning & Data Mining"
                            subtittulo="remoto • live + multimídia"/>
                            <Item 
                            titulo="Storytelling"
                            subtittulo="remoto • live"/>
                        </ItemContainer>
                </ContentContainer>           
                <ContentContainer className={toggleState === 2 ? "content active-content" : "content"}>
                    <h1>Inovação</h1>
                        <ItemContainer>
                            <Item 
                            titulo="UX"
                            subtittulo="DIGITAL"/>
                            <Item 
                            titulo="UX Writing"
                            subtittulo="live"/>
                            <Item 
                            titulo="Storytelling para Negócios"
                            subtittulo="live"/>
                            <Item 
                            titulo="Chatbots"
                            subtittulo="live"/>
                        </ItemContainer>
                </ContentContainer>           
                <ContentContainer className={toggleState === 3 ? "content active-content" : "content"}>
                    <h1>Negócios</h1>
                        <ItemContainer>
                            <Item 
                            titulo="Agile Culture"
                            subtittulo="LIVE"/>
                            <Item 
                            titulo="DPO Data Protection Officer"
                            subtittulo="LIVE"/>
                            <Item 
                            titulo="IT Business Partner"
                            subtittulo="LIVE"/>
                            <Item 
                            titulo="Perícia Forense Computacional"
                            subtittulo="LIVE"/>
                        </ItemContainer>
                </ContentContainer>           
            </CursosContainer>
        </SCursos>
    )
}

export default Cursos