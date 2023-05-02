import React from 'react'
import Navigation from '../components/Navigation'
/* import Counter from '../components/Counter'*/
/* import Hero from '../components/Hero'*/
/* import Main from '../components/Main'*/
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import LatestRelease from '../components/LatestRelease'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <>
      <Navigation/>
      <Welcome/> 
      <LatestRelease/>
    {/*<Counter/>*/} 
    {/*<Hero/>*/}      
    {/*<Main/>*/}
      <Footer/>
   </>
  )
}

export default Home