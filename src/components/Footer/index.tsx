import * as S from './styles'

import logo from '../../assets/logo.png'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'
import linkedin from '../../assets/LinkedIn.svg'

const Footer = () => {
  return (
    <S.Container className="container">
      <S.Top>
        <S.Logo src={logo} alt="AuREUS" />
        <div className="links">
          <a className="link" href="#">
            <span>Home</span>
          </a>
          <a className="link" href="#">
            <span>Sobre</span>
          </a>
          <a className="link" href="#">
            <span>Serviços</span>
          </a>
          <a className="link" href="#">
            <span>Contato</span>
          </a>
        </div>
      </S.Top>
      <S.Bottom>
        <div className="left">
          <span className="copyright">
            © 2023 . Todos os direitos reservados.
          </span>
          <a className="link" href="#">
            Política de privacidade
          </a>
          <a className="link" href="#">
            Termos e Condições
          </a>
          <a className="link" href="#">
            Política de Cookies
          </a>
        </div>
        <div className="right">
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </S.Bottom>
    </S.Container>
  )
}

export default Footer
