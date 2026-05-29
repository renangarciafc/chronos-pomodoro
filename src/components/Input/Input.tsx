import styles from './Input.module.css';

type InputProps = {
    id?: string;
    label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...props }: InputProps) {
    return (
        <>
            {label && <label htmlFor={props.id}>{label}</label>}
            <input
                {...props}
                className={styles.input}
            />
        </>
    );
}