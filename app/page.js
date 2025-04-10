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
    <>
      <Hero />
      <PopularDishes />
      <Menu />
      <Gallery />
      <About />
      <Feeds />
      <Testimonial />
      <Events />
    </>           
  );
}
