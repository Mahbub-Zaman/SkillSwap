import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-[50vh] md:h-[80vh]" // responsive height
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/banner1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Welcome to SkillSwap</h2>
            <p className="text-base md:text-xl">Learn, share, and grow your skills today!</p>
            <button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/banner2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Learn from Experts</h2>
            <p className="text-base md:text-xl">Exchange skills with talented people around the world.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/banner3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Share Your Expertise</h2>
            <p className="text-base md:text-xl">Teach your skills and help others learn.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/banner4.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Grow Together</h2>
            <p className="text-base md:text-xl">Connect and collaborate with your community.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
