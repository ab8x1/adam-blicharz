import { ProjectType } from "./projectTypes"
import Stack from "../Stack";
import ImageSilder from "./ImageSilder";
import styles from './ProjectStyles.module.css';

export default function Project({project} : {project: ProjectType}){
    const {name, description, stack} = project;
    return(
        <>
            <h1>{name}</h1>
            <p className={styles.description}>
                {description}
            </p>
            <ImageSilder project={name}/>
            <Stack {...stack}/>
        </>
    )
}
