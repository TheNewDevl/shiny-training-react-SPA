import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/links.js'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`

const Logo = styled.img`
  height: 80px;
`
export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <Logo src={darkLogo} alt="Logo Shiny" />
      </div>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelance">Profils</StyledLink>

        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderStyle>
  )
}
