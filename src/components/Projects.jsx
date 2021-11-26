import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {useContext, useEffect, useState, memo} from 'react';
import {GlobalContext} from'./App';
import ProjectsAnimation from './ProjectsAnimation';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {ProjectsContainer, Button, Project, ProjectImg, Title, ProjectsContent} from '../styles/projectsStyles';

const Projects = props => {
    const { t } = useTranslation('common');
    const [mobile, setMobile] = useState(undefined);
    const router = useRouter();
    const {indexScroll, setIndexScroll} = useContext(GlobalContext);
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    useEffect( () => {
        setMobile(window.innerWidth <= 991 ? true : false);
        ['froog', 'langbox', 'sm-nauczyciel'].map(project => router.prefetch('/projects/[project]', `/projects/${project}`));
    }, []);
    const viewProject = ({target}) => {
        setIndexScroll(window.scrollY);
        router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => window.scrollTo(0, 0));
    }
    return(
        <ProjectsContainer name="projects" className="container">
            <Title>{t('ActualProjects')}</Title>
            <ProjectsContent ref={ref}>
                <ProjectsAnimation indexScroll={indexScroll} inView={inView} mobile={mobile} del={0.37}>
                        <Project>
                            <ProjectImg> <Image src="/sm-nauczyciel.png" layout="fill" objectFit="contain"/> </ProjectImg>
                            <p>{t('SmDesc')}</p>
                            <Button value="sm-nauczyciel" onClick={viewProject}>{t('Details')}</Button>
                        </Project>
                </ProjectsAnimation>
                <ProjectsAnimation indexScroll={indexScroll} inView={inView} mobile={mobile} del={0.3}>
                    <Project>
                        <ProjectImg> <Image src="/langbox.png" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LbDesc')}</p>
                        <Button value="langbox" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                </ProjectsAnimation>
                    <ProjectsAnimation indexScroll={indexScroll} inView={inView} mobile={mobile} del={0.42}>
                        <Project>
                            <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
                            <p>{t('LkDesc')}</p>
                            <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
                        </Project>
                    </ProjectsAnimation>
            </ProjectsContent>
        </ProjectsContainer>
    )
}

export default memo(Projects);