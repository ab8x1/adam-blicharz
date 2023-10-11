import styles from './thinProjectsStyles.module.css'
import { performRequest } from '@/lib/datocms'
import { ThinProjectType } from './thinProjectsTypes'
import ThinProject from './ThinProject'


async function getThinProjects() {
    let { allProjects } : { allProjects: ThinProjectType[] } = await performRequest({
        query: `query MyQuery {
          allProjects(filter: {}, locale: en) {
            order
            name
            route
            description
            icon
          }
        }`
      });
      return allProjects.sort((a, b) => a.order - b.order);
}

export default async function ThinProjects(){
    const thinProjects = await getThinProjects();

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
