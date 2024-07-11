import React from "react";
import { ViewMenuSection } from "../../Components";
import IntroAbout from "../../Components/Cards/IntroAboutSec/IntroAbout";
import Slider from "../../Components/Slider/Slider";
import { Slides } from "../../Components/Slides/Slides";
import TestimonialSlider from "../../Components/TestimonialSlider/TestimonialSlider";
import { TestimonialSlides } from "../../Components/TestimonialSlider/TestimonialSlides";
import GroupImageContainer from "../../Components/GroupImageContainer/GroupImageContainer";
import Intro from "../../Components/Intro/Intro";
import ItemSlider from "../../Components/ItemSlider/ItemSlider";
const Home = () => {
  return (
    <div>
      <Intro />
      <Slider slides={Slides} />
      <ItemSlider />
      <IntroAbout />
      <ViewMenuSection />
      <div className="py-20 bg-orange-100">
        <TestimonialSlider testimonialSlides={TestimonialSlides} />
      </div>
      <GroupImageContainer />
    </div>
  );
};
export default Home;
