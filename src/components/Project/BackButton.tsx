"use client"

import Image from 'next/image';
import styles from './ProjectStyles.module.css';
import { lastIndexScroll } from '../Navigation-Events/Navigation-Events';
import { useRouter } from 'next/navigation';

export default function BackButton(){
    const router = useRouter();
    const returnToHomePage = async () => {
        if(lastIndexScroll){
            router.push(`/?scrollTo=${lastIndexScroll}`)
        }
        else
            router.push('/')

    }

    return(
        <button className={styles.backButton} onClick={returnToHomePage}>
            <Image src="/chevron-left.svg" width={30} height={30} alt='chevron-left'/>
        </button>
    )
}
