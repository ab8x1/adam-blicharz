import { ProjectType } from "./projectTypes"
import Stack from "../Stack";

export default function Project({project} : {project: ProjectType}){
    const {name, stack} = project;
    return(
        <>
            <h1>{name}</h1>
            <Stack {...stack}/>
        </>
    )
}
