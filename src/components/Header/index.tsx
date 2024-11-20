import * as S from './styles'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <S.Container>
      <div className="main-container container">
        <img className="logo" src={logo} alt="AuREUS" />
        <div className="links">
          <a className="link" href="#">
            Home
          </a>
          <a className="link" href="#">
            Sobre
          </a>
          <a className="link" href="#">
            Serviços
          </a>
          <a className="link contact" href="#">
            Contato
          </a>
        </div>
      </div>
    </S.Container>
  )
}

export default Header
