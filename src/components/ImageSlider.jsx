import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './slider.css';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ImageSlider = ({ project }) => {
	return (
		<>
			<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
				<SwiperSlide>
					<img src={project.image[0]} alt='img' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={project.image[1]} alt='img' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={project.image[2]} alt='img' />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ImageSlider;
