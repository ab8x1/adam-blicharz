import styles from './stackStyles.module.css';
import Image from 'next/image';
import { StackProps } from './stackTypes';

export default function Stack({frontend, backend, devops} : StackProps){

    return(
        <section className={styles.stackSection}>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/frontend.png" width={40} height={40} alt="frontend" priority/>
                    Frontend
                </p>
                <ul className={styles.stackList}>
                    {
                        frontend.map(item =>
                            <li key={item} className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> {item}</li>
                        )
                    }
                </ul>
            </div>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/backend.png" width={40} height={40} alt="backend" priority/>
                    Backend
                </p>
                <ul className={styles.stackList}>
                    {
                        backend.map(item =>
                            <li key={item} className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> {item}</li>
                        )
                    }
                </ul>
            </div>
            <div className={styles.stackColumn}>
                <p className={styles.stackTitle}>
                    <Image className={styles.stackIcon} src="/stack/devOps.png" width={40} height={40} alt="devOps" priority/>
                    Other
                </p>
                <ul className={styles.stackList}>
                    {
                        devops.map(item =>
                            <li key={item} className='alignY'> <Image src="/check.svg" width={24} height={24} alt='check' /> {item}</li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}
