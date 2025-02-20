'use client';

import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Slideshow1JPG from '@/images/slideshow/slideshow-1.jpg';
import Slideshow2JPG from '@/images/slideshow/slideshow-2.jpg';
import Slideshow3JPG from '@/images/slideshow/slideshow-2.jpg';
import Image from 'next/image';

export default function Slideshow() {
	return (
		<Swiper
			className='absolute inset-0 h-full w-full'
			modules={[Autoplay]}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false
			}}
		>
			<SwiperSlide>
				<Image src={Slideshow1JPG} alt='Slideshow 1' className='object-cover' fill />
			</SwiperSlide>
			<SwiperSlide>
				<Image src={Slideshow2JPG} alt='Slideshow 2' fill />
			</SwiperSlide>
			<SwiperSlide>
				<Image src={Slideshow3JPG} alt='Slideshow 3' fill />
			</SwiperSlide>
		</Swiper>
	);
}
