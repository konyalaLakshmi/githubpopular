// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, filterDetails, setActiveFilterId} = props
  const {id, language} = filterDetails
  const btnClassName = isActive ? 'language-btn' : 'active-language-btn'

  const onClickLanguageFilter = () => {
    setActiveFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
