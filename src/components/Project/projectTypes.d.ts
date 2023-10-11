export type ProjectType = {
    name: string,
    url: string,
    description: string,
    imgs: string[],
    stack: {
        frontend: string[],
        backend: string[],
        devops: string[]
    }
    icon: string
}