// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryData} = props

  return (
<li className="repository-card-item-container">
<img className="card-item-image" src={repositoryData.imageUrl} alt={repositoryData.name}/>
<h1 className="card-item-name">{repositoryData.name}</h1>

<div className="stars-container">
<img className="stars-icon" src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="stars"/>
<p className="stars-text">{repositoryData.starsCount} stars</p>
</div>

<div className="stars-container">
<img className="stars-icon"
src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
alt="forks"
/>
<p className="stars-text">{repositoryData.forksCount} forks</p>
</div>

<div className="stars-container">
<img className="stars-icon"
src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
alt="open issues"
/>
<p className="stars-text">{repositoryData.issuesCount} open issues</p>
</div>
</li>
  )
}
export default RepositoryItem