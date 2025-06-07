import { TimerIcon } from 'lucide-react';
import styles from './Logo.module.css';

export function Logo({ children }: { children?: React.ReactNode }) {
    // This component is a simple logo component that can be used to display a logo in the application.
    return (
        <>
            <div className={styles.logo}>
                <a href="#" className={styles.logoLink}>
                    <TimerIcon />
                    <span>
                        {children}
                    </span>
                </a>
            </div>
        </>
    );
}