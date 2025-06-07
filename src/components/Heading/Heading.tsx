export function Heading({ children }: { children?: React.ReactNode }) {
    // This component is a simple heading component that can be used to display a title or heading in the application.
    return (
        <h1>
            { children }
        </h1>
    )
}