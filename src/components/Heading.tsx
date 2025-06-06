import styles from './Heading.module.css'

export function Heading(props: { children?: React.ReactNode }) {
    // This component is a simple heading component that can be used to display a title or heading in the application.
    return (
        <h1 className={styles.heading}>{ props.children }</h1>
    )
}