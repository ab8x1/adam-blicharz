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

const Projects = ({allProjects}) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const contentRef = useRef();
    const {indexScroll, setIndexScroll} = useContext(GlobalContext);

    const [ref, inView] = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    const viewProject = ({target}) => {
        console.log(target.parentElement.parentElement.parentElement.scrollLeft);
        console.log(target.parentElement.scrollLeft);
        // const xPos = contentRef.current.scrollLeft;
        // const yPos = window.scrollY;
        // router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => {
        //     window.scrollTo(0, 0);
        //     setIndexScroll({xPos, yPos});
        // });
    }

    const projects = allProjects.map(({name, route, description, icon}) =>
        <Project>
            <ProjectImg> <Image src={icon} width={52} height={52}/> </ProjectImg>
            <div>
                <h2>{name}</h2>
                <p>{description.substr(0, 250)}<b>[...]</b></p>
            </div>
            <Button value={route} onClick={viewProject}>{t('Details')}</Button>
        </Project>
    )

    return(
        <Animation seen={indexScroll} inView={inView} reference={ref}>
            <Title>{t('ActualProjects')}</Title>
            <Carousel items={projects} sizes={[
                {size: 992, columns: 2, gap: 30},
                {size: 0, columns: 1, gap: 15},
            ]}/>
        </Animation>
    )
}

export default memo(Projects);