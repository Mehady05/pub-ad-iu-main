import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavArea from './components/NavArea/NavArea';
import './App.css'
import Slider from './components/Slider/Slider';
import PromoSection from './components/PromoSection/PromoSection';
import AboutSection from './components/AboutSection/AboutSection';
import CourseSection from './components/CourseSection/CourseSection';
import RegSection from './components/RegSection/RegSection';
import EventSection from './components/EventSection/EventSection';
import Counter from './components/Counter/Counter';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import BlogSection from './components/BlogSection/BlogSection';
import SponsorSection from './components/SponsorSection/SponsorSection';
import WidgetSection from './components/WidgetSection/WidgetSection';
import FooterSection from './components/FooterSection/FooterSection';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <NavArea></NavArea>
        <Slider></Slider>
        <PromoSection></PromoSection>
        <AboutSection></AboutSection>
        <CourseSection></CourseSection>
        <RegSection></RegSection>
        <EventSection></EventSection>
        <Counter></Counter>
        <TestimonialSection></TestimonialSection>
        <BlogSection></BlogSection>
        <SponsorSection></SponsorSection>
        <WidgetSection></WidgetSection>
        <FooterSection></FooterSection>
        <Routes>
          
        </Routes>
    </div>
  );
}

export default App;
