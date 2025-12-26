import HeroSlider from '../components/HeroSlider';
import TrendingCourses from '../components/Trending';
import Cards from '../components/cards';
import TopProviders from '../components/TopProviders';
import Reviews from '../components/Reviews';
import HowItWorks from '../components/HowItWorks';

const Home = () => (
  <div>
    <title>SkillSwap | Home</title>
    {/* HeroSlider using Swiper */}
    <HeroSlider />
    <div className='bg-[var(--color-base-gray)]'>
      <Cards/>
    </div>
    <div className='bg-[var(--color-base-white)]'>
      <TrendingCourses/>
    </div>
    <div className='bg-[var(--color-base-gray)]'>
      <TopProviders/>
    </div>
    <div className='bg-[var(--color-base-white)]'>
      <HowItWorks/>
    </div>
    <div className='bg-[var(--color-base-gray)]'>
      <Reviews/>
    </div>
  </div>
);
export default Home;