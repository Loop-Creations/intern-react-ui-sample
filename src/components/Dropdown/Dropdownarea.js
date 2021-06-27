import { useState } from "react"
import "../../components/Dropdown/Dropdownarea.css"


function Dropdownarea({selected,setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Cx Demand', 'Missing Item in RO', 'Range Building','Periodical Replenishment']
  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={(e) =>
        setIsActive(!isActive)}>
        Cx Demand / Missing Item in RO / Range Building / Periodical Replenishment
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


export default Dropdownarea

