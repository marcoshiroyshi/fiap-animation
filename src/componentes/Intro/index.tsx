'use client'

import Image from "next/image"
import { ContainerGsap, ContainerLeftGsap, ContainerRightGsap, Middle, SIntro} from "./Intro.style"
import IntroImg from '../../../public/intro.svg'
import Skills from '../../../public/skills.svg'
import Circle from '../../../public/circle.svg'
import Conhecimento from '../../../public/conhecimento.svg'
import Text from '../../../public/intro-text.svg'
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Intro = () => {   
    const leftGsapRef = useRef(null)
    const rightGsapRef = useRef(null)
    const areaCardsRef = useRef(null)

    useEffect(() => {
        const leftGsap = leftGsapRef.current;
        const rightGsap = rightGsapRef.current;
        const areaCards = areaCardsRef.current;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: areaCards,
                start: "top 600px",
                end: "bottom 500px",
                scrub: true
            }
        })
        
        tl.to(leftGsap, {
            left: -1500
            
        }, 0).fromTo(rightGsap, {
            left: -1500
        }, {
            left: 0
        }, 0)

    }, [])

    return(


        <SIntro>
            <div className="container-slider right">
                <div className="slide">
                    <h1 className="slide-text">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>
                    <h1 className="slide-text">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>
                    
                </div>
            </div>
            <div className="container-slider left">
                <div className="slide">
                    <h1 className="slide-text">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>
                    <h1 className="slide-text">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>
                </div>
            </div>
            <Middle>
                <Image
                src={IntroImg} 
                width={1495} 
                height={804}
                alt="img-intro"
                />
            </Middle>
            <ContainerGsap ref={areaCardsRef}>
                <ContainerLeftGsap ref={leftGsapRef}>
                    <Image
                        src={Skills} 
                        width={477} 
                        height={121}
                        alt="skills"
                        />
                    <Image
                        src={Circle} 
                        width={38} 
                        height={38}
                        alt="circle"
                    />
                    <Image
                        src={Conhecimento} 
                        width={1143} 
                        height={121}
                        alt="conhecimento"
                    />
                    <Image
                        src={Circle} 
                        width={38} 
                        height={38}
                        alt="circle"
                    />
                    <Image
                        src={Skills} 
                        width={477} 
                        height={121}
                        alt="skills"
                        />
                        <Image
                        src={Circle} 
                        width={38} 
                        height={38}
                        alt="circle"
                    />
                    <Image
                        src={Conhecimento} 
                        width={1143} 
                        height={121}
                        alt="conhecimento"
                    />
                    <Image
                        src={Circle} 
                        width={38} 
                        height={38}
                        alt="circle"
                    />
                    <Image
                        src={Skills} 
                        width={477} 
                        height={121}
                        alt="skills"
                        />
                        
                </ContainerLeftGsap>
                <ContainerRightGsap ref={rightGsapRef}>
                    <Image
                            src={Text} 
                            width={1440} 
                            height={121}
                            alt="circle"
                        />
                    <Image
                            src={Text} 
                            width={1440} 
                            height={121}
                            alt="circle"
                        />
                    <Image
                            src={Text} 
                            width={1440} 
                            height={121}
                            alt="circle"
                        />
                    <Image
                            src={Text} 
                            width={1440} 
                            height={121}
                            alt="circle"
                        />
                </ContainerRightGsap>
            </ContainerGsap>
        </SIntro>
    )
}

export default Intro