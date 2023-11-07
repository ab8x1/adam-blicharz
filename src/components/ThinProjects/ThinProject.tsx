'use client'
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import styles from './thinProjectsStyles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ThinProjectType } from './thinProjectsTypes'
import useIntersection from '@/helpers/observe'
import { hasHistory, LinkSaveScroll } from "../Navigation-Events/Navigation-Events"

const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    show: {
        y: 0,
        opacity: 1,
    }
}

const transition = {
    type: "spring", damping: 12, stiffness: 200
}

export default function ThinProject({icon, name, description, route} : ThinProjectType){
    const homepageSeen = hasHistory('/');
    const [inView, setInView] = useState(homepageSeen);
    const ref: any = useRef();
    useIntersection(ref, () => setInView(true));

    return(
        <motion.div
            animate={inView ? "show" : "hidden"}
            initial={homepageSeen ? "show" : "hidden"}
            variants={animationVariants}
            transition={transition}
            className={styles.thinProject}
            ref={ref}
            style={!inView ? {pointerEvents: 'none', touchAction: 'none'} : undefined}
        >
            <Image
                src={icon}
                width={580}
                height={326}
                sizes="100vw"
                alt='project img'
                className={styles.thinProjectImg}
            />
            <p className={styles.thinProjectTitle}>{name}</p>
            <div className={styles.thinProjectContent}>
                <p className={styles.thinProjectDescription}>
                    { description.slice(0,250) }[...]
                </p>
                <LinkSaveScroll href={`/projects/${route}`} className={styles.thinProjectButton}>
                    Details
                    <Image src="/arrow-up-right.png" width={24} height={24} alt="arrow up right" />
                </LinkSaveScroll>
            </div>
        </motion.div>
    )
}
