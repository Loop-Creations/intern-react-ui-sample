import styles from './TextInput.module.css';

function TextInput({ label, id }) {
    return (
        <div className={styles.text_input}>
            <input id={id} type="text" />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextInput
