"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import styles from './ProjectStyles.module.css';
import Image from 'next/image';

export default function ImageSlider({project} : {
    project: string
}) {

    return (
        <div className={styles.silder}>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                speed={1000}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image src={`/projects/${project}_1.png`} width={1300} height={731} alt={`${project}-1`} className={styles.slide} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/projects/${project}_2.png`} width={1300} height={731} alt={`${project}-2`} className={styles.slide} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/projects/${project}_3.png`} width={1300} height={731} alt={`${project}-3`} className={styles.slide} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/projects/${project}_4.png`} width={1300} height={731} alt={`${project}-4`} className={styles.slide} quality={100}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
