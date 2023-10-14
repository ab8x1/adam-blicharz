import styles from './thinProjectsStyles.module.css'
import { performRequest } from '@/lib/datocms'
import { ThinProjectType } from './thinProjectsTypes'
import ThinProject from './ThinProject'


export default async function ThinProjects({ thinProjects } : {
    thinProjects: ThinProjectType[]
}){
    return(
        <section className={styles.thinProjectsSection}>
            <p className="sectionTitle">Some of my work</p>
            <div className={styles.thinProjects}>
                {
                    thinProjects.map(project =>
                        <ThinProject key={project.name} {...project} />
                    )
                }
            </div>
        </section>
    )
}
