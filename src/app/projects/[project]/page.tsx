import Project from "@/components/Project";
import { performRequest } from "@/lib/datocms";
import { ProjectType } from "@/components/Project/projectTypes";

export async function generateStaticParams() {
    let { allProjects } : { allProjects: {project: string}[]} = await performRequest({
        query: `query MyQuery {
            allProjects(filter: {}, locale: en) {
                project: route
            }
        }`
      });
    return allProjects;
}

async function getProject(params : {project: string}) {
    const projectRoute  = params.project;
    let { project } : { project: ProjectType } = await performRequest({
        query: `query MyQuery {
            project(
                filter: {
                  route: {
                    eq: "${projectRoute}"
                  }
                },
                locale: en
              ) {
                name
                url
                description
                imgs
                stack
                icon
              }
        }`
    });

    if(!project) throw new Error('Project not found');

    return project
}

  export default async function ProjectPage({ params } : {
    params : {
        project: string
    }
  }) {
    const project = await getProject(params);

    return(
        <div className="container">
            <Project project={project} />
        </div>
    )
}