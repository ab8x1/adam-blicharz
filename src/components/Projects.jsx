import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {useContext, memo, useRef} from 'react';
import {GlobalContext} from'./App';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {ProjectsSection, Button, Project, ProjectImg, Title} from '../styles/projectsStyles';
import Carousel from './Carousel';

const fade = {
    hidden: {
        y: -20,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: 0.4, ease: "easeInOut"}
    }
}

const Animation = ({children, seen, inView, reference}) => {
    return(
        <ProjectsSection name="projects" className="container">
            <div ref={reference}>
            {
                seen !== undefined ? <>{children}</>
                : <motion.div variants={fade} initial={'hidden'} animate={inView ? 'show' : 'hidden'}>
                    {children}
                  </motion.div>
            }
            </div>
        </ProjectsSection >
    )
}

const Projects = props => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const contentRef = useRef();
    const {indexScroll, setIndexScroll} = useContext(GlobalContext);

    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const viewProject = ({target}) => {
        console.log(target.parentElement.parentElement.parentElement.scrollLeft);
        // const xPos = contentRef.current.scrollLeft;
        // const yPos = window.scrollY;
        // router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => {
        //     window.scrollTo(0, 0);
        //     setIndexScroll({xPos, yPos});
        // });
    }

    const projects = [
        <Project>
        <ProjectImg> <Image src="/sm-nauczyciel.png" width={52} height={52}/> </ProjectImg>
        <div>
            <h2>Sm Nauczyciel</h2>
            <p>Strona Spółdzelni Mieszkaniowej Nauczyciel w Policach. Projekt ten posiada rozbudowany panel do zarządzania treścią, umożliwiający administratorowi dodawanie/edycję postów wraz ze zdjęciami. Pisząc post<b>[...]</b></p>
        </div>
        <Button value="sm-nauczyciel" onClick={viewProject}>{t('Details')}</Button>
        </Project>,
        <Project style={{backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
            <ProjectImg> <Image src="/langbox.png" layout="fill" objectFit="contain"/> </ProjectImg>
            <p>{t('LbDesc')}</p>
            <Button value="langbox" onClick={viewProject}>{t('Details')}</Button>
        </Project>,
        <Project>
            <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
            <p>{t('LkDesc')}</p>
            <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
        </Project>,
        <Project>
            <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
            <p>{t('LkDesc')}</p>
            <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
        </Project>,
        <Project >
            <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
            <p>{t('LkDesc')}</p>
            <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
        </Project>,
        <Project>
            <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
            <p>{t('LkDesc')}</p>
            <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
        </Project>
    ]

    return(
        <Animation seen={indexScroll} inView={inView} reference={ref}>
            <Title>{t('ActualProjects')}</Title>
            <Carousel items={projects} sizes={[
                {size: 992, columns: 2, gap: 30},
                {size: 0, columns: 1, gap: 10},
                {size: 1100, columns: 3, gap: 10},
            ]}/>
        </Animation>
    )
}

export default memo(Projects);