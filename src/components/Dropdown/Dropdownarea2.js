import { useState } from "react"
import "../../components/Dropdown/Dropdownarea.css"

function Dropdownarea2({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['IW', 'RO', 'VO', 'WH', 'OT']
  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={(e) =>
        setIsActive(!isActive)}>
        IW / RO / VO / WH / OT
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        < div className="dropdown-content">
          {options.map(option => (
            <div
              onCLick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              className="dropdown-item">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdownarea2