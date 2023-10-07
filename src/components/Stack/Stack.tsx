import styles from './stackStyles.module.css';
import Image from 'next/image';

export default function Stack(){

    return(
        <section className={styles.stackSection}>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/frontend.png" width={40} height={40} alt="frontend" priority/>
                    Frontend
                </p>
                <ul className={styles.stackList}>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> React</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> NextJs</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> TypeScript</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> Remix</li>
                </ul>
            </div>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/backend.png" width={40} height={40} alt="backend" priority/>
                    Backend
                </p>
                <ul className={styles.stackList}>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> NodeJs</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> Express</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> MongoDB</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> MySQL</li>
                </ul>
            </div>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/devOps.png" width={40} height={40} alt="devOps" priority/>
                    DevOps
                </p>
                <ul className={styles.stackList}>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> Ubuntu</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> NGINX</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> Digital Ocean</li>
                    <li className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> Google Analytics</li>
                </ul>
            </div>
        </section>
    )
}
