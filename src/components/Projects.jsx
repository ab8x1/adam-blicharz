import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {useContext, useEffect, useState, memo, useRef} from 'react';
import {GlobalContext} from'./App';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {ProjectsContainer, Button, Project, ProjectImg, Title, ProjectsContent, Arrow} from '../styles/projectsStyles';

const fade = {
    hidden: {
        y: -40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: 0.4, ease: "easeInOut"}
    }
}

const Projects = props => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const contentRef = useRef();
    const {indexScroll, setIndexScroll} = useContext(GlobalContext);
    const [activeBack, setActiveBack] = useState(indexScroll > 0);
    const [activeForth, setActiveForth] = useState(true);
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    useEffect(() => {
        const {current} = contentRef;
        current.addEventListener('scroll', followScroll);
        return () => {
            current.removeEventListener('scroll', followScroll);
        }
    }, [])
    console.log(inView);
    const followScroll = el => {
        setActiveBack(el.target.scrollLeft > 0);
        setActiveForth(el.target.offsetWidth + el.target.scrollLeft < el.target.scrollWidth - 10);
    }

    const viewProject = ({target}) => {
        setIndexScroll(window.scrollY);
        router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => window.scrollTo(0, 0));
    }
    const scrollnextProjext = forth => {
        const element = contentRef.current;
        const contentWidth = parseInt(element.offsetWidth / (window.innerWidth >= 992 ? 2 : 1));
        const variation = element.scrollLeft % (contentWidth);
        let distance = forth ? contentWidth - variation : variation || contentWidth;
        //if user scrolls beyond last content box, return to prevoius one
        if(!activeForth && variation > 0 && variation < 10) distance += contentWidth;
        if(forth){
            const newDistance = element.scrollLeft + element.offsetWidth + distance;
            if(element.scrollWidth - newDistance > 0 && element.scrollWidth - newDistance < 10) element.scrollLeft = element.scrollWidth;
            else element.scrollLeft += distance;
        }
        else element.scrollLeft -= distance;
    }

    return(
        <ProjectsContainer name="projects" className="container">
            <motion.div variants={fade} initial={indexScroll ? 'show' : 'hidden'} animate={inView ? 'show' : 'hidden'}>
                <Title ref={ref}>{t('ActualProjects')}</Title>
                <ProjectsContent ref={contentRef}>
                    <Arrow onClick={() => scrollnextProjext(false)} disabled={!activeBack}>
                        <Image src="/chevron.png" width={64} height={64}/>
                    </Arrow>
                    <Arrow onClick={() => scrollnextProjext(true)} forth disabled={!activeForth}>
                        <Image src="/chevron.png" width={64} height={64}/>
                    </Arrow>
                    <Project>
                        <ProjectImg> <Image src="/sm-nauczyciel.png" width={52} height={52}/> </ProjectImg>
                        <div>
                            <h2>Sm Nauczyciel</h2>
                            <p>Strona Spółdzelni Mieszkaniowej Nauczyciel w Policach. Projekt ten posiada rozbudowany panel do zarządzania treścią, umożliwiający administratorowi dodawanie/edycję postów wraz ze zdjęciami. Pisząc post<b>[...]</b></p>
                        </div>
                        <Button value="sm-nauczyciel" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                    <Project style={{backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
                        <ProjectImg> <Image src="/langbox.png" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LbDesc')}</p>
                        <Button value="langbox" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                    <Project>
                        <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LkDesc')}</p>
                        <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                    <Project>
                        <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LkDesc')}</p>
                        <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                    <Project >
                        <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LkDesc')}</p>
                        <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                    <Project>
                        <ProjectImg> <Image src="/froog.svg" layout="fill" objectFit="contain"/> </ProjectImg>
                        <p>{t('LkDesc')}</p>
                        <Button value="froog" onClick={viewProject}>{t('Details')}</Button>
                    </Project>
                </ProjectsContent>
            </motion.div>
        </ProjectsContainer>
    )
}

export default memo(Projects);