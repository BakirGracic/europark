'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Slideshow1JPG from '@/images/slideshow/slideshow-1.jpg';
import Slideshow2JPG from '@/images/slideshow/slideshow-2.jpg';
import Slideshow3JPG from '@/images/slideshow/slideshow-3.jpg';

export default function Slideshow() {
	const slides = [Slideshow1JPG, Slideshow2JPG, Slideshow3JPG];

	return (
		<Swiper
			className='absolute inset-0 h-full w-full'
			modules={[Autoplay, EffectFade]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false
			}}
			loop={true}
			effect={'fade'}
		>
			{slides.map((img, i) => (
				<SwiperSlide key={i}>
					<Image
						src={img}
						alt={`Slideshow ${i + 1}`}
						className='object-cover brightness-[40%] contrast-[70%]'
						fill
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
