import { useState } from "react"
import styles from "../../components/Dropdown/Dropdownarea.module.css"

function Dropdownarea({ selected, setSelected, options, label }) {
    const [isActive, setIsActive] = useState(false);
    const clickHandler = (value) => {
        setSelected(value);
        setIsActive(false);
    }
    return (
        <div className={styles.dropdown} >
            <div className={styles.dropdown_button} onClick={(e) => setIsActive(!isActive)} >
                <p>{selected}</p>
                <i className="fas fa-chevron-down"></i>
            </div>
            <label> {label} </label>
            {
                isActive &&
                <div className={styles.dropdown_content} >
                    {
                        options.map(option => <div className={styles.dropdown_item} onClick={() => clickHandler(option)}>
                            {option}
                        </div>)
                    }
                </div>
            }
        </div>
    );
}


export default Dropdownarea;