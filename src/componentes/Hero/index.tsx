import { useEffect, useRef } from "react";
import { SHero } from "./Hero.style";
import gsap from "gsap";

const Hero = () => {
    const textoUmRef = useRef(null)
    const textoDoisRef = useRef(null)
    const subtituloRef = useRef(null)

    useEffect(() => {
        const textoUm = textoUmRef.current;
        const textoDois = textoDoisRef.current;
        const subtitulo = subtituloRef.current;

        const tl = gsap.timeline()

        tl.fromTo(textoUm, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }).fromTo(textoDois, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            
        }).fromTo(subtitulo, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0
        })


    }, [])
    return(
    <SHero>
        <div>
            <h1 ref={textoUmRef}>A Melhor Faculdade </h1> 
            <h1 ref={textoDoisRef} id="text-2">de Tecnologia</h1>
            <h2 ref={subtituloRef} >SOBRE</h2>
        </div>
    </SHero>);
}

export default Hero