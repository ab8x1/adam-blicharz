import { ProjectType } from "./projectTypes"
import Stack from "../Stack";
import ImageSilder from "./ImageSilder";
import styles from './ProjectStyles.module.css';
import BackButton from "./BackButton";

export default function Project({project} : {project: ProjectType}){
    const {name, description, stack} = project;
    return(
        <div className={styles.project}>
            <h1 className="alignY" style={{gap: '10px'}}>
                <BackButton/>
                {name}
            </h1>
            <p className={styles.description}>
                {description}
            </p>
            <ImageSilder project={name}/>
            <Stack {...stack}/>
        </div>
    )
}
