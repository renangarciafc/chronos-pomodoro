import styles from './Container.module.css';

export function Container({ children }: { children?: React.ReactNode }) {
    // This component is a simple container that can be used to wrap the content of the application.
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}