import Hero from '@/components/Hero';
import PopularDishes from '@/components/PopularDishes';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import About from '../components/About';
import Feeds from '@/components/Feeds';
import Testimonial from '@/components/Tesmonial';
import Events from '@/components/Events';
export default function Home() {
  return (
    <div className='space-y-16 md:space-y-24'>
      <Hero />
      <PopularDishes />
      <Menu />
      <Gallery />
      <About />
      <Feeds />
      <Testimonial />
      <Events />
    </div>           
  );
}
