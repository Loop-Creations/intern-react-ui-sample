import { useState } from 'react';

import styles from './TwoChoiceInput.module.css';

function TwoChoiceInput({ label, id }) {
    const [selected, setSelected] = useState(0);
    const pressHandler = (v) => {
        setSelected(v);
    }
    return (
        <div className={styles.two_choice_input}>
            <div>
                <button className={selected === 0 ? styles.active : ""} type="button" onClick={() => pressHandler(0)}>
                    YES
                </button>
                <button className={selected === 1 ? styles.active : ""} type="button" onClick={() => pressHandler(1)}>
                    NO
                </button>
            </div>
            <label for={id}>{label}</label>
        </div>
    )
}

export default TwoChoiceInput
