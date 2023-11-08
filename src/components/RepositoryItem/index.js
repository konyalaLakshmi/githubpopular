// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {imgUrl, starsCount, forksCount, name, issuesCount} = details

  return (
    <li className="repository-Item">
      <img className="img" src={imgUrl} alt={name} />
      <h1 className="h1">{name}</h1>
      <div className="stars-container">
        <img
          className="stars-icon"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stars-container">
        <img
          className="stars-icon"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="stars-text">{forksCount} forks</p>
      </div>
      <div className="stars-container">
        <img
          className="stars-icon"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="stars-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
