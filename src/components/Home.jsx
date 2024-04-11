import { useContext } from 'react';
import Delivery from './Delivery';
import Hero from './Hero';
import TopPicks from './TopPicks';
import { FoodDataContext } from '../utils/context';

const Home = () => {
  const {
    menu: { foods, topPicks },
  } = useContext(FoodDataContext);

  return (
    <>
      <TopPicks />
      <Hero />
      <Delivery />
    </>
  );
};

export default Home;
