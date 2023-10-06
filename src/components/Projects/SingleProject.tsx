'use client'
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import styles from './projectsStyles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from './projectTypes'
import useIntersection from '@/helpers/observe'

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

export default function SignleProject({icon, name, description, route} : Project){
    const [inView, setInView] = useState(false);
    const ref: any = useRef();
    useIntersection(ref, () => setInView(true));

    return(
        <motion.div
            animate={inView ? "show" : "hidden"}
            initial="hidden"
            variants={animationVariants}
            transition={transition}
            className={styles.project}
            ref={ref}
        >
            <Image
                src={icon}
                width={360}
                height={202}
                sizes="100vw"
                alt='project img'
            />
            <p className={styles.projectTitle}>{name}</p>
            <p className={styles.prijectContent}>
                { description.slice(0,250) }[...]
            </p>
            <Link href={`/projects/${route}`} className={styles.projectButton}>Details</Link>
        </motion.div>
    )
}
