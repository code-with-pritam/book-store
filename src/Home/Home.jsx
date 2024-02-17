import React from 'react'
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavBooks from './FavBooks';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Reviwe from './Reviwe';

const Home = () => {
  return (
    <>
      <Banner />
      <BestSellerBooks />
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Reviwe/>
    </>
  );
};

export default Home;
