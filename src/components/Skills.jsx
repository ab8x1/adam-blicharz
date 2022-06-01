import {useContext, useRef, useState} from 'react';
import {GlobalContext} from'./App';
import IsMobile from './IsMobile';
import {Skill, SkillsContent, SkillsContainer, Title, Stack} from '../styles/skillsStyles';
import skills from '../consts/skills';
import Image from 'next/image';
import {useIntersection} from '../helpers/intersectionObserver';

const stagger = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 2.8,
            staggerChildren: 0.5,
        }
    }
}

const animationVariants = {
    hidden: { opacity: 0, y: 200 },
    show: {
        y: 0,
        opacity: 1,
    }
}

const mobileTransition = {
    type: "spring", damping: 10, stiffness: 70
}

const desktopTransition = {
    type: "spring", damping: 12, stiffness: 180
}

const Skills = ({isMobile}) => {
    const {indexScroll} = useContext(GlobalContext);
    const [visibleColumns, setVisibleColumns] = useState({0: false, 1: false, 2: false});
    const refs = [useRef(), useRef(), useRef()];

    refs.forEach((ref, i) => {
        useIntersection(ref, () => {
            if(isMobile && !indexScroll) setVisibleColumns(st => ({...st, [i]: true}));
        }, {
            rootMargin: '200px',
            threshold: '0.2'
        });
    });

    return(
        <SkillsContainer name="skills">
            <SkillsContent
                className="container"
                initial = {indexScroll ? 'show' : 'hidden'}
                animate = "show"
                variants = { stagger }
            >
                {
                    skills.map(({type, stack}, i) =>
                        <Skill
                            animate={isMobile ? visibleColumns[i] ? 'show' : 'hidden' : undefined}
                            initial={isMobile ? 'hidden' : undefined}
                            key={type}
                            variants={indexScroll ? null : animationVariants}
                            transition={isMobile ? mobileTransition : desktopTransition}
                            ref={refs[i]}>
                            <Title>
                                <p>{type}</p>
                                <Image src={`/${type}.png`} height={64} width={64}/>
                            </Title>
                            {
                                stack.map(tech =>
                                    <Stack key={tech}>{tech}</Stack>
                                )
                            }
                        </Skill>
                    )
                }
            </SkillsContent>
        </SkillsContainer>
    )
}

export default IsMobile(Skills);