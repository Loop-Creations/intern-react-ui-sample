import { useState } from "react"
import "../../components/Dropdown/Dropdownarea.css"

function Dropdownarea({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Cx Demand', 'Missing Item in RO', 'Range Building', 'Periodical Replenishment'];
    const clickHandler = (value) => {
        setSelected(value);
        setIsActive(false);
    }
    return ( <
        div className = "dropdown" >
        <
        div className = "dropdown-button"
        onClick = {
            (e) => setIsActive(!isActive) } >
        <
        p > Cx Demand / Missing Item in RO / Range Building < /p> <
        span className = "fas fa-caret-down" > < /span> <
        /div> <
        label > Order Type < /label> {
            isActive &&
                <
                div className = "dropdown-content" > {
                    options.map(option => < div className = "dropdown-item"
                        onCLick = { clickHandler } > { option } < /div>)
                    } <
                    /div>
                } <
                /div>
        );
    }


    export default Dropdownarea