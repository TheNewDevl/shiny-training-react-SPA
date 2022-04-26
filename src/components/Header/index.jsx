import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darkLogo from '../../assets/dark-logo.png'

/** CSS style for Link router components */
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`
export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <img src={darkLogo} alt="Logo Shiny" />
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
