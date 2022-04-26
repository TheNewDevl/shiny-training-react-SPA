import errorIllustration from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const MainStyle = styled.main`
  background-color: ${colors.backgroundLight};
  text-align: center;
  margin: 2em;
  padding: 2em;
`
export default function Error() {
  return (
    <MainStyle>
      <h1>Oups...</h1>
      <img src={errorIllustration} alt="Not found page illustration" />
      <p>Il semblerait qu'il y ait un problème</p>
    </MainStyle>
  )
}
