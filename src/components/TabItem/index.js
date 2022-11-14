import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const onUpdateTab = () => updateTab(tabId)
  const isActived = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onUpdateTab}
        className={`tab-btn ${isActived} `}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
