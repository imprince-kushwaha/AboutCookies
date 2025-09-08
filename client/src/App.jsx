import './App.css'
import AboutPage from './components/Coffee/AboutPage'
import Carousel from './components/Coffee/Caraousel'
import CoffeeProcess from './components/Coffee/CoffeeProcess'
import ContactPage from './components/Coffee/ContactPage'
import CustomerFeedback from './components/Coffee/CustomerFeedback'
import FirstPage from './components/Coffee/FirstPage'
import Footer from './components/Coffee/Footer'
import Header from './components/Coffee/Header'
import InstaCoffeePage from './components/Coffee/InstaCoffeePage'
import Layout from './components/Coffee/Layout'
import ShopCollection from './components/Coffee/ShopCollection'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from './components/CookieConsent'

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold text-center mt-5">Welcome to My MERN Site</h1> */}

      {/* <CookieConsent /> */}
{/* <Carousel/> */}
      {/* 
      <ShopCollection/>
      <CoffeeProcess/>
      <CustomerFeedback/>
      <InstaCoffeePage/>
      <Footer/> */}

      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
