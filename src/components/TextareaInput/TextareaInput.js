import styles from './TextareaInput.module.css';

function TextareaInput({ label, id }) {
    return (
        <div className={styles.text_input}>
            <textarea id={id} type="text"/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextareaInput
