import useTranslation from 'next-translate/useTranslation'
import {useContext} from 'react';
import {GlobalContext} from'./App';
import { useInView } from 'react-intersection-observer';
import {Skill, SkillsContent, SkillsContainer, Title, Stack} from '../styles/skillsStyles';
import skills from '../consts/skills';
import Image from 'next/image';

const animationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
}

const Skills = () => {
    const { t } = useTranslation('common');
    const {indexScroll} = useContext(GlobalContext);

    return(
        <SkillsContainer name="skills">
            <SkillsContent 
                className="container"
                initial = {indexScroll ? 'visible' : 'hidden'}
                animate = "visible"
                variants = { animationVariants }
                transition = {{duration: 0.4, ease: "easeInOut", delay: 1}}
            >
                {
                    skills.map(({type, stack}) =>
                        <Skill key={type}>
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

export default Skills;