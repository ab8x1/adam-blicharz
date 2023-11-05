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
                {
                    [...Array(4)].map((_, i) =>
                        <SwiperSlide
                            key={`${project}-${i + 1}`}
                        >
                            <Image
                                src={`/projects/${project}_${i + 1}.png`} width={1300} height={731} alt={`${project}-${i + 1}`}
                                className={styles.slide}
                                quality={100}
                                priority
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
