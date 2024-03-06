import { useState } from "react";
import { AccordionContentContainer, AccordionItemContainer, Button } from "./AccordionItem.styles";
import Image from "next/image";
import Plus from '../../../public/plus.svg'
import Minus from '../../../public/minus.svg'
import Item from "../ItemContent/Item";

interface IAccordionItem {
    titulo: string,
    children: any
}

const Accordion = ({titulo, children}:IAccordionItem) => {
    const [accordionOpen, setAccordionOpen] = useState(true)

    function handleClick() {
        setAccordionOpen(!accordionOpen)
    }

    return(
        <AccordionItemContainer>
            <Button onClick={handleClick}
            >
                <h1>{titulo}</h1>
                <div id="logo-desktop"
                style={{
                    backgroundColor: accordionOpen ? "#ed145b" : "#000"
                }}>
                    {accordionOpen ? 
                    <Image
                    src={Minus} 
                    width={50} 
                    height={50}
                    alt="Minus"
                    />
                     : 
                     <Image
                    src={Plus} 
                    width={154} 
                    height={59}
                    alt="Plus"
                    />
                    
                    }
                    
                </div>
            </Button>
            <div className={accordionOpen ? "resposta active-accordion" : "resposta"}>
                <AccordionContentContainer className={accordionOpen ? "content active-content" : "content"}>
                    {children}
                </AccordionContentContainer>
            </div>
        </AccordionItemContainer>
    );
}

export default Accordion