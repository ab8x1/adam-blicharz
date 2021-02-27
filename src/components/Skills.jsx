import useTranslation from 'next-translate/useTranslation'
import {useContext} from 'react';
import {GlobalContext} from'./App';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Skill, SkillsContent, SkillsSection, Title, Stack} from '../styles/skillsStyles';

const animationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
}

const Skills = () => {
    const { t } = useTranslation('common');
    const [ref, inView] = useInView({
        threshold: 0.07,
        triggerOnce: true
    });
    const {indexScroll} = useContext(GlobalContext);

    return(
        <SkillsSection ref={ref}>
            <motion.div
              initial = {indexScroll ? 'visible' : 'hidden'}
              animate = "visible"
              variants = { animationVariants }
              transition = {{duration: 0.4, ease: "easeInOut", delay: 1}}
            >
                <SkillsContent className="container">
                    <Skill>
                        <Title>
                            <p>Frontend</p>
                            <img src="/frontend.png" alt=""/>
                        </Title>
                        <Stack>HTML</Stack>
                        <Stack>CSS</Stack>
                        <Stack>Bootstrap</Stack>
                        <Stack>JS</Stack>
                        <Stack>React</Stack>
                        <Stack>NextJs</Stack>
                        <Stack>JQuery</Stack>
                    </Skill>
                    <Skill>
                        <Title>
                            <p>Backend</p>
                            <img src="/backend.png" alt=""/>
                        </Title>
                        <Stack>NodeJs</Stack>
                        <Stack>Express</Stack>
                        <Stack>MongoDB</Stack>
                        <Stack>MySQL</Stack>
                        <Stack>Websockets</Stack>
                    </Skill>
                    <Skill>
                        <Title>
                            <p>DevOps</p>
                            <img src="/devops.png" alt=""/>
                        </Title>
                            <Stack>Digital Ocean</Stack>
                            <Stack>Ubuntu</Stack>
                            <Stack>Nginx</Stack>
                            <Stack>Certbot</Stack>
                            <Stack>Google Analytics</Stack>
                            <Stack>Google Search Console</Stack>
                    </Skill>
                </SkillsContent>
            </motion.div>
        </SkillsSection>
    )
}

export default Skills;