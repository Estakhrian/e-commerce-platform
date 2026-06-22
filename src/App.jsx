import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopRateProducts from './components/TopRateProducts/TopRateProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100
    })

    window.history.replaceState(null, "", "/")
  }, [])



  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>

      <section id='home'>
        <Navbar />
      </section>
      
      <Hero />

      <section id='women-products'>
        <Products />
      </section>

      <section id='men-products'>
        <TopRateProducts />
      </section>

      <Banner />

      <section id='subscribe'>
        <Subscribe />
      </section>

      <section id='top-selling'>
        <Products />
      </section>

      <section id='testimonials'>
        <Testimonials />
      </section>

      <Footer />

    </div>
  )
}

export default App
