import * as S from './styles'

import stars from '../../assets/stars.png'
import mariaClara from '../../assets/maria-clara.jpg'
import robertoAlves from '../../assets/roberto-alves.jpg'
import anaJulia from '../../assets/ana-julia.jpg'

const testimonialData = [
  {
    text: 'A tecnologia AuREUS é uma revolução para quem trabalha com sustentabilidade! Instalei os painéis em um edifício comercial e fiquei impressionada com a eficiência, mesmo em dias nublados. Além disso, o fato de serem feitos com resíduos agrícolas me deixou ainda mais segura de estar investindo em algo que ajuda o meio ambiente e reduz o desperdício.',
    author: {
      name: 'Maria Clara',
      role: 'Empresária no setor de construção sustentável',
      image: mariaClara
    }
  },
  {
    text: 'Com os painéis AuREUS, estou aproveitando frutas que antes descartava devido a tufões. Agora, essas safras geram energia para minha propriedade rural. É inspirador ver como uma solução tão criativa pode transformar perdas em oportunidades.',
    author: {
      name: 'Roberto Alves',
      role: 'Agricultor e entusiasta de energia limpa',
      image: robertoAlves
    }
  },
  {
    text: 'A versatilidade dos painéis AuREUS é impressionante! Poder aplicá-los verticalmente nos vidros de prédios facilita a integração em projetos urbanos, otimizando espaço e gerando energia de maneira sustentável. Recomendo para quem busca inovação e responsabilidade ambiental.',
    author: {
      name: 'Ana Júlia',
      role: 'Engenheira ambiental',
      image: anaJulia
    }
  }
]

const Testimonials = () => {
  return (
    <S.Container className="container">
      <div>
        <h2 className="title">Depoimentos</h2>
        <span className="subtitle">
          Saiba mais sobre a satisfação dos nossos clientes!
        </span>
      </div>
      <S.RatingList>
        {testimonialData.map((testimonial, index) => (
          <S.RatingItem key={index}>
            <img className="rating-stars" src={stars} alt="Avaliação" />
            <p className="rating-text">&quot;{testimonial.text}&quot;</p>
            <div className="rating-author">
              <img
                className="rating-author-image"
                src={testimonial.author.image}
                alt={testimonial.author.name}
              />
              <div className="rating-author-info">
                <span className="rating-author-name">
                  {testimonial.author.name}
                </span>
                <span className="rating-author-role">
                  {testimonial.author.role}
                </span>
              </div>
            </div>
          </S.RatingItem>
        ))}
      </S.RatingList>
    </S.Container>
  )
}

export default Testimonials
