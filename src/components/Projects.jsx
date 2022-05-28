import useTranslation from 'next-translate/useTranslation';
import {useContext, memo} from 'react';
import {GlobalContext} from'./App';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {ProjectsSection, Title} from '../styles/projectsStyles';
import Carousel from './Carousel';

const fade = {
    hidden: {
        y: 30,
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
    const {indexScroll, setIndexScroll} = useContext(GlobalContext);

    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return(
        <Animation seen={indexScroll} inView={inView} reference={ref}>
            <Title>{t('ActualProjects')}</Title>
            <Carousel
                items={allProjects}
                indexScroll={indexScroll}
                setIndexScroll={setIndexScroll}
                sizes={[
                    {size: 992, columns: 2, gap: 35},
                    {size: 0, columns: 1, gap: 15},
            ]}/>
        </Animation>
    )
}

export default memo(Projects);