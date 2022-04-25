import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Survey() {
  const { questionNumber } = useParams()
  const intQuestionNumber = parseInt(questionNumber, 10)
  const prevQuestionNumber = intQuestionNumber === 1 ? 1 : intQuestionNumber - 1
  const nextQuestionNumber = intQuestionNumber + 1

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>

      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

      {questionNumber > 9 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${intQuestionNumber + 1}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
