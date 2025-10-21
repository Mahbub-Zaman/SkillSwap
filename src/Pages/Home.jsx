import HeroSlider from '../components/HeroSlider';
import TrendingCourses from '../components/Trending';
import Cards from '../components/cards';

const Home = () => (
  <div>
    {/* HeroSlider using Swiper */}
    <HeroSlider />
    <div className='bg-gray-300'>
      <Cards/>
      <TrendingCourses/>
    </div>
    
  </div>
);
export default Home;