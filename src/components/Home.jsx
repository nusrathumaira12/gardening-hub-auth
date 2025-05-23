import React from 'react';


import FeaturedGardeners from './FeaturedGardeners';
import Banner from './Banner';
import TopTips from './TopTips';
import Reviews from './Reviews';
import ContactSection from './ContactSection';

const Home = () => {
   
    return (
        <div>
          <Banner></Banner>
          <FeaturedGardeners></FeaturedGardeners>
          <TopTips></TopTips>
         <Reviews></Reviews>
       <ContactSection></ContactSection>
        </div>
    );
};

export default Home;