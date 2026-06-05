import styles from './DefaultButton.module.css';

type DefaultButtonProps = {
    icon?: React.ReactNode;
    color?: 'primary' | 'danger' | 'warning' | 'info';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({ icon, color = 'primary', ...props }: DefaultButtonProps) {
    return (
        <button
            {...props}
            className={`${styles.defaultButton} ${styles[color]}`}
        >
            {icon}
        </button>
    );
}