import Link from "next/link"
import styles from './navbarStyles.module.css'
import Image from "next/image"

export default function Navbar(){

    return(
        <nav id={styles.navbar} className="container alignY">
            <Link href="/" id={styles.logo} className="centerFlex">
                A
            </Link>
            <div className={`centerFlex ${styles.icons}`}>
                <a href="https://twitter.com/a_b8x1" target="_blank">
                    <Image src="/socials/twitter.svg" width={35} height={35} alt="twitter"/>
                    <span className="blank">twitter link</span>
                </a>
                <a href="https://web.telegram.org/k/#@ab8x1" target="_blank">
                    <Image src="/socials/telegram.svg" width={35} height={35} alt="telegram"/>
                    <span className="blank"> telegram link</span>
                </a>
            </div>
        </nav>
    )
}
