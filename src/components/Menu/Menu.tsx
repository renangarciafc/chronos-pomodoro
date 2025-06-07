import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Menu.module.css';

export function Menu() {
    // This component is a simple menu component that can be used to display a menu in the application.
    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuItem}><HouseIcon/></a>
            <a href="#" className={styles.menuItem}><HistoryIcon/></a>
            <a href="#" className={styles.menuItem}><SettingsIcon/></a>
            <a href="#" className={styles.menuItem}><SunIcon/></a>
        </nav>
    );
}