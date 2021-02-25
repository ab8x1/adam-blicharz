import {motion} from 'framer-motion';

const desktopVariant = {
    hidden: {
        rotate: 180,
        scale: 0
    },
    visible: del => ({
        rotate: 360,
        scale: 1 ,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: del
        }
    })
}
const mobileVariant = {
    hidden: {opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.3
        }
    }
}

const ProjectsAnimation = ({indexScroll, inView, mobile, del, children}) => {
    return(
        <>
        {
            mobile === undefined || indexScroll
            ? <>{children}</>
            :<motion.div
                custom={del}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={ mobile ? mobileVariant : desktopVariant }
            >
                {children}
            </motion.div>
        }
        </>
)};

export default ProjectsAnimation;