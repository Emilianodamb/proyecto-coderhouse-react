import styles from '../styles/Switch.module.css'

const Switch = ({ checked, setChecked }) => {
    return (
        <div className={styles.container}>
            <span>Dark mode</span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked = {checked}
                    onChange={() => setChecked((prev) => !prev)}
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}

export default Switch