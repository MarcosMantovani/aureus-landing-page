import * as S from './styles'

import itemImage from '../../assets/icon-list.png'

const Benefits = () => {
  return (
    <S.Container>
      <div className="main-container">
        <h2 className="title">Benefícios</h2>
        <ul className="list">
          <S.ItemCard>
            <img className="item-image" src={itemImage} alt="Desperdício" />
            <h3 className="item-title">Desperdício</h3>
            <p className="item-text">
              Segundo a FAO, em 2019, estimava-se entre um quarto e um terço de
              desperdício mundial de alimentos produzidos por ano. Em números
              representa cerca de 1.3000 bilhões de toneladas de alimentos.
            </p>
          </S.ItemCard>
          <S.ItemCard>
            <img className="item-image" src={itemImage} alt="Desperdício" />
            <h3 className="item-title">Energia Limpa</h3>
            <p className="item-text">
              A energia solar não polui, é renovável, limpa e silenciosa, pode
              ser usada em áreas isoladas da rede elétrica, necessidade mínima
              de manutenção, muito fácil de instalar e é barato para manter.
            </p>
          </S.ItemCard>
          <S.ItemCard>
            <img className="item-image" src={itemImage} alt="Desperdício" />
            <h3 className="item-title">Diferencial</h3>
            <p className="item-text">
              Este painel solar converte radiação UV em eletricidade, sendo 50%
              mais eficiente que os convencionais. Pode ser instalado em
              superfícies verticais, como vidros de edifícios, ao contrário dos
              sistemas tradicionais que exigem grandes áreas horizontais.
            </p>
          </S.ItemCard>
        </ul>
      </div>
    </S.Container>
  )
}

export default Benefits
