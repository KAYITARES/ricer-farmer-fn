import React from "react";
import Card from "../component/card"
import Do  from "../assets/do.jpeg"
import Umuntu from "../assets/umuntu.jpeg"
import Doing from "../assets/doing.jpeg"

const About = () => {
  return (
    <div className="about-us-contaner">
      <div className="about">
        <h1>hard working hands rice farmer</h1>
      </div>
      <div className="form">
        <p>
          Rice is a priority food crop in Rwanda. With an average productivity
          of 5.8 t /Ha, rice is grown over 12,400 Ha of marshlands in two
          seasons which makes around 80,000 MT per year. Although there has been
          a rapid rise in rice production in the past decade, the country has
          not yet achieved self-sufficiency. Rwanda annually imports an average
          of 26,736 t of milled rice. Furthermore, the quality of locally
          produced rice lags behind that of imported rice. Thus Rwanda’s rice
          sector is confronted with how to sustainably raise both the production
          and quality of locally grown rice to meet the consumer demands.
        </p>
        <div className="card">
        <Card photo={Do} name="proccess rice farmer" price={10} />
        <Card photo={Umuntu} name="growth of rife" price={20} />
        <Card photo={Doing} name="harvest in rice" price={5} />
                </div>
      </div>
    </div>
  );
};
export default About;
