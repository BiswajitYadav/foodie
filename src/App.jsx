import React from 'react';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </>
  )
}

export default App
