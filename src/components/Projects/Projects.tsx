import styles from './projectsStyles.module.css'
import {performRequest} from '@/lib/datocms'
import { Project } from './projectTypes'
import SingleProject from './SingleProject'


async function getProjects() {
    let { allProjects } : { allProjects: Project[] } = await performRequest({
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

export default async function Projects(){
    const projects = await getProjects();

    return(
        <section className={styles.projectsSection}>
            <p className={styles.projectsTitle}>Some of my work</p>
            <div className={styles.projects}>
                {
                    projects.map(project =>
                        <SingleProject key={project.name} {...project} />
                    )
                }
            </div>
        </section>
    )
}
