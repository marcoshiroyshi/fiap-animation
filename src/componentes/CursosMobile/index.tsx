
import Accordion from "../Accordion";
import Item from "../ItemContent/Item"
import Title from "../Title";
import { CursosMobileSection } from "./CursosMobile.styles";

const CursosMobile = () => {
    return(
        <CursosMobileSection>
            <Title
                title="Cursos"
                subtitle="Cursos de curta duração"
            />
            <div className="container">
                <Accordion titulo="tecnologia">
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
                </Accordion>
                <Accordion titulo="inovação">
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
                </Accordion>
                <Accordion titulo="negócios">
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
                </Accordion>
            </div>
        </CursosMobileSection>
    );
}

export default CursosMobile