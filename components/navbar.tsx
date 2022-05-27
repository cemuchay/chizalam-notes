import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import LogoImg from '../public/images/logo.png'

export default function Navbar() {

    return (
        <div>
            <nav className={styles.navbar}>
                {/* LOGO  */}
                <div className={styles.logo}>
                    <div className={styles.textLogoPrimary}>
                        <Image
                            src={LogoImg}
                            alt="Chizalam Emuchay"
                            width={200}
                            height={50}
                        />
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
                            <Link href="/">CONTACT</Link>
                            {/* DROPDOWN MENU  */}
                            {/* <ul className={styles.dropdown}>
                                <li><Link href="/">Dropdown 1 </Link></li>
                                <li><Link href="/">Dropdown 2</Link></li>
                                <li><Link href="/">Dropdown 2</Link></li>
                                <li><Link href="/">Dropdown 3</Link></li>
                                <li><Link href="/">Dropdown 4</Link></li>
                            </ul> */}
                        </li>
                        {/* <li><Link href="/">ARTICLES</Link></li>
                        <li><Link href="/">CONTACT</Link></li> */}
                        <li>
                        </li>
                    </div>
                </ul>
            </nav>

            <hr />
        </div>

    )
}