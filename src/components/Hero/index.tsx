import * as S from './styles'

import heroImage from '../../assets/hero-image.png'

const Hero = () => {
  return (
    <S.Container className="container">
      <S.Text>
        <h2 className="title">
          Inovação para redução de desperdício de alimentos
        </h2>
        <p className="text">
          Uma solução para melhorar esse contexto e que foi vencedora do Prêmio
          James Dyson* em sustentabilidade em 2020 seria a inovação do estudante
          filipino de engenharia Carvey Ehren Maigue, da Universidade de Mapua:
          o AuREUS System Tecnology.
        </p>
        <div className="button-container">
          <S.Button>Comprar</S.Button>
          <span className="button-text">
            +5.000 pessoas como você já compraram este produto.
          </span>
        </div>
      </S.Text>
      <S.Image src={heroImage} alt="Hero" />
    </S.Container>
  )
}

export default Hero
