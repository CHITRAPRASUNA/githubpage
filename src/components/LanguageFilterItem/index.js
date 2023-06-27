// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {
    isSelected,
    languageFilter,
    setSelectedLanguageFilterAndGetRepositories,
  } = props

  const btnClassName = isSelected ? 'Language-btn selected-btn' : 'language-btn'

  const onClickBtnLanguageFilter = () => {
    setSelectedLanguageFilterAndGetRepositories(languageFilter.id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickBtnLanguageFilter}
        type="button"
      >
        {languageFilter.language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
