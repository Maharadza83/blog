import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // Sprawdzamy, czy w localStorage jest token i nazwa usera
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');
        if (token && userName) {
            setLoggedInUser(userName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setLoggedInUser(null);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <ul className={styles.navMenu}>
                    <li>
                        <Link href="/">Strona główna</Link>
                    </li>
                    <li>
                        <Link href="/about">O nas</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/contact">Kontakt</Link>
                    </li>
                </ul>
                <ul className={styles.navAuth}>
                    {loggedInUser ? (
                        <>
                            <li>Witaj, {loggedInUser}!</li>
                            <li>
                                <button onClick={handleLogout}>Wyloguj się</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/login">Zaloguj</Link>
                            </li>
                            <li>
                                <Link href="/register">Zarejestruj</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
