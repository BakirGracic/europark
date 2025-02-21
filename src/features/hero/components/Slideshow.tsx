'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Slideshow1JPG from '@/images/slideshow/slideshow-1.jpg';
import Slideshow2JPG from '@/images/slideshow/slideshow-2.jpg';
import Slideshow3JPG from '@/images/slideshow/slideshow-2.jpg';

export default function Slideshow() {
	return (
		<Swiper
			className='absolute inset-0 h-full w-full'
			modules={[Autoplay, EffectFade]}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false
			}}
			loop={true}
			effect={'fade'}
		>
			<SwiperSlide>
				<Image
					src={Slideshow1JPG}
					alt='Slideshow 1'
					className='object-cover brightness-[40%] contrast-[70%]'
					fill
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={Slideshow2JPG}
					alt='Slideshow 2'
					className='object-cover brightness-[40%] contrast-[70%]'
					fill
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={Slideshow3JPG}
					alt='Slideshow 3'
					className='object-cover brightness-[40%] contrast-[70%]'
					fill
				/>
			</SwiperSlide>
		</Swiper>
	);
}
