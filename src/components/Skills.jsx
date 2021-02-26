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
                        <p>{t('FrontendStack')}</p>
                        <Stack>HTML</Stack>
                        <Stack>CSS</Stack>
                        <p>Bootstrap</p>
                        <Stack>JS</Stack>
                        <p>React</p>
                        <p>NextJs</p>
                        <p>JQuery</p>
                    </Skill>
                    <Skill>
                        <Title>
                            <p>Backend</p>
                            <img src="/backend.png" alt=""/>
                        </Title>
                        <p>{t('BackendStack')}</p>
                        <Stack>NodeJs</Stack>
                        <p>Express</p>
                        <Stack>MongoDB</Stack>
                        <Stack>MySQL</Stack>
                    </Skill>
                    <Skill>
                        <Title>
                            <p>DevOps</p>
                            <img src="/devops.png" alt=""/>
                        </Title>
                            <p>{t('DevOpsStack')}</p>
                            <p>Digital Ocean</p>
                            <p>Heroku</p>
                            <p>Mydevil</p>
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