
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import WellcomeBanner from './components/WellcomeBanner/WellcomeBanner'
import NavBar from './components/NavBar/NavBar'
import CarouselLogo from './components/CarouselLogo/CarouselLogo'
import WhyYouNeedDigitalMarketing from './components/WhyYouNeedDigitalMarketing/WhyYouNeedDigitalMarketing'
// import NavBar from './components/NavBar/NavBar'



function App() {

  return (
    <>
      <HeaderTop />
      <NavBar/>
      <WellcomeBanner />
      <CarouselLogo />
      <WhyYouNeedDigitalMarketing />
    </>
  )
}

export default App
