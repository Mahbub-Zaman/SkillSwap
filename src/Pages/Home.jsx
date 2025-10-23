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
    <div className='bg-gray-300'>
      <Cards/>
      <TrendingCourses/>
      <TopProviders/>
      <HowItWorks/>
      <Reviews/>
    </div>
    
  </div>
);
export default Home;