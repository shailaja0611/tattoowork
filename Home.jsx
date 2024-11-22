import React from 'react'
import Nav from './Nav'
import Footer from './Footer';
import ImageSliders from './ImageSliders';
import PopularTatoos from './PopularTatoos';
import TattooArtists from './TattooArtists';
import Testimonials from './Testimonials'
import PortfilioComp from './PortfilioComp';
import ChoosingUs from './ChoosingUs'
import NewsLatter from './NewsLatter'

const Home = () => {
  return (
    <div>
        <Nav />
        <ImageSliders />
        <PopularTatoos />
        <ChoosingUs />
        <TattooArtists />
        <PortfilioComp />
        <Testimonials />
        <NewsLatter />
        <Footer />
    </div>
  )
}

export default Home