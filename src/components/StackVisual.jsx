import {StackContainer, Tool, Icon, Circle} from '../styles/aboutMeStyles'
import Img from './Img'
import Image from 'next/dist/client/image'
import projects from '../consts/projects'
import { motion } from 'framer-motion';

const fadeStack = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.9,
            delayChildren: 1.3,
            staggerChildren: 0.2,
        }
    }
}

const fadeTool = {
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, ease: "easeInOut"}
    }
}

export default function StackVisual({disableAnimation}){
    return(
            <StackContainer variants={fadeStack} initial={disableAnimation ? 'show' : 'hidden'} animate='show'>
                <Circle>
                    <Image src="/code.png" width={50} height={50} alt="harvest growth" priority={true} quality={60}/>
                </Circle>
                <div className='relativeContainer'>
                    {
                        projects.map(({name, imgUrl, dimensions, background, position, animation}) =>
                            <div key={name} style={{...position, position: 'absolute'}}>
                                <div className='relativeContainer'>
                                    <Tool
                                        variants={{...animation, ...fadeTool}}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.05, ease: "linear" },
                                        }}>
                                        <Icon className='centerFlex' style={background}>
                                            <Img src={`/stack/${imgUrl}`} {...dimensions} alt={name}/>
                                        </Icon>
                                        {name}
                                    </Tool>
                                </div>
                            </div>
                        )
                    }
                </div>
            </StackContainer>
    )
}