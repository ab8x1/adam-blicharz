import styles from './infoStyles.module.css'
import Image from 'next/image'

const companies = [
    {name: 'harvest', url: 'https://www.harvest.finance/', iconSize: {width: 133, height: 45}},
    {name: 'langbox', url: 'https://app.langbox.co/', iconSize: {width: 124, height: 35}},
    {name: 'pozalabs', url: 'https://pozalabs.xyz/', iconSize: {width: 121, height: 35}},
    {name: 'sitegpt', url: 'https://sitegpt.ai/', iconSize: {width: 125, height: 25}},
    {name: 'spectra', url: 'https://www.spectra.finance/', iconSize: {width: 132, height: 30}},
]

export default function Info(){

    return(
        <section className={styles.infoSection}>
            <div className="container">
                <Image src="/code.png" width={96} height={96} alt='code' style={{marginLeft:'-10px'}} priority quality={100}/>
                <h1 className={styles.title}>Hi, I&apos;m Adam.</h1>
                <h2 className={styles.subTitle}>Fullstack JavaScript Web Developer</h2>
                <div className={styles.skills}>
                    <div className={styles.skill}>Frontend</div>
                    <div className={styles.skill}>Backend</div>
                </div>
                <p className={styles.line}>
                    Contributed to
                </p>
                <div className={`alignY ${styles.comapnies}`}>
                    {
                        companies.map(({name, url, iconSize}) =>
                            <a href={url} target='_blank' key={name}>
                                <Image src={`/companies/${name}.svg`} {...iconSize} alt={name} priority/>
                                <span className='blank'>name</span>
                            </a>
                        )
                    }
                </div>
            </div>
      </section>
    )
}
