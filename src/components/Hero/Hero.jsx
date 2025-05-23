import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import S1 from '../../assets/slide1.png';
import S2 from '../../assets/slide2.jpg';
import S3 from '../../assets/slide3.jpg';
import S4 from '../../assets/slide4.jpg';
import CountUp from 'react-countup';

// Dummy CounterCard component added as it's not defined
const CounterCard = ({ start, end, duration, label }) => {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-80 rounded shadow p-5">
      <CountUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold my-4"
        start={start}
        end={end}
        duration={duration}
        suffix="+"

      />
      <p className="text-sm md:text-base text-center">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='bg-cyan-500'>
      <div className="carousel w-8/12 mx-auto flex h-[300px] sm:h-[400px] md:h-[600px] lg:h-[500px] rounded-2xl py-15">

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img src={S1} alt="Slide 1" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-black/40 flex items-start justify-start">
                <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 text-black bg-transparent opacity-30 ml-0">
                  <CounterCard start={3000} end={3500} duration={4} label="Room Found" />
                  <CounterCard start={400} end={1000} duration={4} label="Total Users" />
                  <CounterCard start={15} end={25} duration={4} label="Cities" />
                  {/* <CounterCard start={80} end={85} duration={4} label="Match satisfaction " /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img src={S2} alt="Slide 2" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex items-start p-4 sm:p-10 rounded-2xl">
                <p className="text-xl sm:text-3xl md:text-4xl pacifico-regular text-blue-900">
                  Because living with plants is great,<br /> <span>but living with people is better.</span> 
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={S3} alt="Slide 3" className="w-full h-full object-cover rounded-2xl" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img src={S4} alt="Slide 4" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute top-1/3 left-4 sm:left-10 bg-opacity-30 bg-transparent p-4 sm:p-10 rounded-lg">
                <p className="text-xl sm:text-3xl md:text-4xl pacifico-regular text-gray-900">
                  Roommates that vibe together, <br />thrive together
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
