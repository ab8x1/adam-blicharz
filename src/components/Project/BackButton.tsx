"use client"

import styles from './ProjectStyles.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { previousHistoryItem } from '../Navigation-Events/Navigation-Events';

export default function BackButton(){
    const router = useRouter();

    const backToHomePage = () => {
        if(previousHistoryItem() === "/")
            router.back()
        else
            router.push('/')
    }

    return(
        <button className={styles.backButton} onClick={backToHomePage}>
            <Image src="/chevron-left.svg" width={30} height={30} alt='chevron-left'/>
        </button>
    )
}
