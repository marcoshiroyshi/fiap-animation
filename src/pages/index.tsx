
import Cursos from "@/componentes/Cursos";
import CursosMobile from "@/componentes/CursosMobile";
import Faq from "@/componentes/FAQ/Faq";
import Header from "@/componentes/Header";
import Hero from "@/componentes/Hero";
import Intro from "@/componentes/Intro";
import styles from "@/styles/Home.module.css";
import { useRef } from "react";


export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <Header target={mainRef}/>
      <Hero/>
      <Intro/>
      <Cursos/>
      <CursosMobile/>      
      <Faq/>
    </main>
  );
}
