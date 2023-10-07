import styles from './figmaStyles.module.css'
import Image from 'next/image'

export default function Figma(){
    return(
        <section className={styles.figmaSection}>
        <Image src="/figma.svg" width={50} height={50} alt='figma'/>
            <span>I work with Figma</span>
            <p>
                I&apos;m a developer with a knack for bringing Figma templates to life. From sleek landing pages to complex web apps, I turn designs into functional websites that stand out.
            </p>
        </section>
    )
}
