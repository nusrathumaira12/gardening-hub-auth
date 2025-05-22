import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1519671619280-fd2b53b38ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Join the biggest gardening festival this spring!',
      button: 'Explore Events',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1677142714801-88cc6036c4fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Learn planting from expert gardeners across the city.',
      button: 'Join Workshop',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1682922554161-b28639de5935?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Urban gardening tips and eco hacks await you.',
      button: 'Start Exploring',
    },
  ];
const Banner = () => {
    return (
        <div  className="w-full relative">
          <Swiper
           modules={[Navigation, Autoplay]}
           
           navigation
           autoplay={{ delay: 3000 }}
           loop={true}
           className="h-[600px]"
          >
{slides.map((slide)=> (
    <SwiperSlide key={slide.id}>
 <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
 <div
 
 className="bg-green-900 bg-opacity-50 p-6 rounded-xl text-center max-w-2xl">
 <h2 className="text-3xl md:text-5xl font-bold mb-4">

 <Typewriter
                    words={[
                      '🌿 Spring Gardening Festival',
                      '🌼 Expert Gardening Workshops',
                      '🍀 Explore Green Living Tips',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
 </h2>
 <p className="text-lg mb-4 text-white font-semibold">{slide.description}</p>
 <button className="bg-amber-300 hover:bg-white-600 hover:text-amber-400 px-7 py-3 rounded-xl font-semibold transition duration-300">
                  {slide.button}
                </button>
                </div>
 

            </div>

    </SwiperSlide>
))}
          </Swiper>
        </div>
    );
};

export default Banner;