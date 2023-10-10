import Image from "next/image"
import navStyles from "@/components/Navbar/navbarStyles.module.css"
import footerStyles from './footerStyles.module.css'

export default function Footer(){

    return(
        <footer className={footerStyles.footer}>
            <p className="sectionTitle">Let's chat!</p>
            <div className={`alignY ${navStyles.icons}`}>
                <a href="https://twitter.com/a_b8x1" target="_blank">
                    <Image src="/socials/twitter.svg" width={35} height={35} alt="twitter"/>
                    <span className="blank">twitter link</span>
                </a>
                <a href="https://web.telegram.org/k/#@ab8x1" target="_blank">
                    <Image src="/socials/telegram.svg" width={35} height={35} alt="telegram"/>
                    <span className="blank"> telegram link</span>
                </a>
            </div>
        </footer>
    )
}
