import { ProjectType } from "./projectTypes"
import Stack from "../Stack";
import ImageSilder from "./ImageSilder";
import styles from './ProjectStyles.module.css';
import BackButton from "./BackButton";

export default function Project({project} : {project: ProjectType}){
    const {name, description, stack, url} = project;
    return(
        <div className={styles.project}>
            <div className={`alignY ${styles.topBar}`}>
                <h1 className="alignY" style={{gap: '10px'}}>
                    <BackButton/>
                    {name}
                </h1>
                <a href={url}target="_blank" className={styles.visitWebsite}>
                    Visit {name}
                </a>
            </div>
            <p className={styles.description}>
                {description}
            </p>
            <ImageSilder project={name}/>
            <Stack {...stack}/>
        </div>
    )
}
