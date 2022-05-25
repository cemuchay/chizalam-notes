import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* LOGO  */}
            <div className={styles.logo}>
                <div className={styles.textLogoPrimary}>
                </div>
                <div className={styles.textLogoSecondary}>
                </div>
            </div>

            {/* NAVIGATION MENU */}
            <ul className={styles.navLinks}>

                {/* USING CHECKBOX HACK */}

                {/* <input type="checkbox" id="checkbox_toggle" /> */}

                <label className={styles.hamburger}>&#9776;</label>

                {/* NAVIGATION MENUS */}

                <div className={styles.menu}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/books">BOOKS</Link></li>
                    <li className={styles.services}>
                        <Link href="/">SERVICES</Link>
                        {/* DROPDOWN MENU  */}
                        <ul className={styles.dropdown}>
                            <li><Link href="/">Dropdown 1 </Link></li>
                            <li><Link href="/">Dropdown 2</Link></li>
                            <li><Link href="/">Dropdown 2</Link></li>
                            <li><Link href="/">Dropdown 3</Link></li>
                            <li><Link href="/">Dropdown 4</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/">ARTICLES</Link></li>
                    <li><Link href="/">CONTACT</Link></li>
                </div>
            </ul>
        </nav>
    )
}