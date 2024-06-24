import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default Slider => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    className='h-[500px]'>
<SwiperSlide className=" h-[200px] flex flex-col justify-center items-center text-center h-full  w-full" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdlPRqUuJWIkpR4VVZOy5GJlum8Y80Yu5ag&s')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <h1 className="font-bold text-4xl">Explore Recipies</h1>
  <button className="p-5 my-8 text-white shadow-md shadow-black text-lg hover:bg-green-500 hover:shadow-orange-500 transition-1.5s transition-ease hover:shadow-xl bg-orange-500 font-bold rounded-md ">Discover More</button>
</SwiperSlide>     
 <SwiperSlide className="p-6 bg-blue-900 h-full w-full flex justify-center items-center text-center w-full ">Slide 2</SwiperSlide>
      <SwiperSlide className="p-6 bg-blue-900 h-full w-full flex justify-center items-center text-center w-full ">Slide 3</SwiperSlide>
    </Swiper>
  );
};