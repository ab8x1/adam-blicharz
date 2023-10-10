'use client'
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import styles from './projectsStyles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from './projectTypes'
import useIntersection from '@/helpers/observe'
import { hasHistory } from "../Navigation-Events/Navigation-Events"

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
            className={styles.project}
            ref={ref}
        >
            <Image
                src={icon}
                width={580}
                height={326}
                sizes="100vw"
                alt='project img'
                className={styles.projectImg}
            />
            <p className={styles.projectTitle}>{name}</p>
            <div className={styles.projectContent}>
                <p className={styles.projectDescription}>
                    { description.slice(0,250) }[...]
                </p>
                <Link href={`/projects/${route}`} className={styles.projectButton}>
                    Details
                    <Image src="/arrow-up-right.png" width={24} height={24} alt="arrow up right" />
                </Link>
            </div>
        </motion.div>
    )
}
