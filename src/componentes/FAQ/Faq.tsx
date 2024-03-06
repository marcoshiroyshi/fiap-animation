import Title from "../Title"
import { DuvidasContainer, FaqContainer, SFaq } from "./Faq.style"

const Faq = () => {
    return(
        <SFaq>
            <FaqContainer>
                <header>
                    <Title 
                    title="FAQ"
                    subtitle="Dúvidas Frequentes"
                    />
                </header>
                <DuvidasContainer>
                    <div>
                        <h2 className="tablet row-1">QUANDO POSSO ME MATRICULAR?</h2>
                        <p className="paragrafo">Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.</p>
                    </div>
                    <div>
                        <h2 >POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</h2>
                        <p className="paragrafo">Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.</p>
                    </div>
                    <div>
                        <h2 className="tablet">QUAIS OS PRÉ-REQUISITOS?</h2>
                        <p className="paragrafo">Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.</p>
                    </div>
                    <div>
                        <h2 className="title tablet-row">QUAL A DURAÇÃO DOS CURSOS?</h2>
                        <p className="paragrafo">De 6 a 42 horas.</p>
                    </div>
                    <div>
                        <h2 className="title tablet-grid">PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</h2>
                        <p className="paragrafo">Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.</p>
                    </div>
                    <div>
                        <h2 className="title tablet-grid">VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</h2>
                        <p className="paragrafo">Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.</p>
                    </div>
                </DuvidasContainer>
            </FaqContainer>
        </SFaq>
    )
}

export default Faq