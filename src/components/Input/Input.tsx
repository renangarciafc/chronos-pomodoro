import styles from './Input.module.css';

type InputProps = {
    // Define any props you might need in the future
    id?: string;
    label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
            />
        </>
    );
}