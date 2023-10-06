import styles from './stackStyles.module.css';
import Image from 'next/image';

export default function Stack(){

    return(
        <section className={styles.stackSection}>
            <div>
                <p className={styles.stackTitle}>
                    Frontend
                    <Image src="/stack/Frontend.webp" width={40} height={40} alt="" />
                </p>
                <ul className={styles.stackList}>
                    <li>React</li>
                    <li>NextJs</li>
                    <li>TypeScript</li>
                    <li>Remix</li>
                </ul>
            </div>
            <div>
                <p className={styles.stackTitle}>
                    Backend
                    <Image src="/stack/Backend.webp" width={40} height={40} alt="" />
                </p>
                <ul className={styles.stackList}>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div>
                <p className={styles.stackTitle}>
                    DevOps
                    <Image src="/stack/DevOps.webp" width={40} height={40} alt="" />
                </p>
                <ul className={styles.stackList}>
                    <li>Ubuntu</li>
                    <li>NGINX</li>
                    <li>Digital Ocean</li>
                    <li>Google Analytics</li>
                </ul>
            </div>
        </section>
    )
}
