import * as S from './styles'
import textImage from '../../assets/aureus-window.png'

const TextImage = () => {
  return (
    <S.Container>
      <div className="main-container container">
        <S.Text>
          <h2 className="title">
            Qual a relação com a redução de desperdício?
          </h2>
          <ul className="list">
            <li>
              <p className="item">
                Para produção dos painéis frutas e vegetais ou resíduos deles
                são triturados ou realiza-se a extração dos seus sucos e as
                etapas subsequentes seria a filtração, destilação ou maceração.
                Essas partículas são suspensas em resina e realiza-se a moldagem
                na superfície que será aplicada.
              </p>
            </li>
            <li>
              <p className="item">
                Com o AuREUS as safras da agricultura atingidas por fenômenos
                naturais como tufões, frutas e vegetais que seriam desperdiçados
                poderiam ser aproveitadas para gerar energia.
              </p>
            </li>
          </ul>
          <S.Button>Saiba mais sobre</S.Button>
        </S.Text>
        <S.Image src={textImage} alt="Text Image" />
      </div>
    </S.Container>
  )
}

export default TextImage
