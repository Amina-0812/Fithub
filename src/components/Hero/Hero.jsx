import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png'
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion';

const Hero = () => {
  const transition = {type: 'spring', duration : 3};
  const mobile = window.innerWidth<= 768 ? true : false;

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

        <div className="left-h">


            <Header/>
{/* the best ad */}
            <div className="the-best-ad">
              <motion.div
              initial ={{left:mobile? "165px" : "238px" }}
              whileInView={{left: '8px'}}
              transition={{...transition, type: 'tween'}}

              ></motion.div>
              <span>Where Fitness Meets Excellence: Welcome to Our Exclusive Gym</span>
            </div>

            {/* hero heading */}
            <div className="hero-text">
              <div>
              <span className='stroke-text'>Sculpt </span>
              <span>Your</span>
              </div>
              <div>
                <span>Dream Body</span>
              </div>
              <div>
                <span>
                Explore how we can support you in crafting your dream physique and embracing a fulfilling lifestyle
            </span>
            </div>
            </div>


{/* figures */}
<div className="figures">
  <div>
    <span>+100</span>
    <span>Skilled Trainers</span>
    </div>
  <div>
    <span>+900</span>
    <span>members enrolled</span>
    </div>
  <div>
    <span>+50</span>
    <span>fitness offerings</span>
    </div>
</div>

{/* hero buttons */}
       <div className="hero-buttons">
        <button className="btn">Join Us Now</button>
        <button className="btn">Explore Further</button>
       </div>


        </div>
        <div className="right-h">
          <button className='btn'>Sign Up</button>


          <motion.div
          initial={{right : '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero imgs */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
           src={hero_image_back} alt="" className="hero-image-back" />
          {/* calories */}
          <motion.div
          initial={{right : '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
           className="calories">
            <img src={Calories} alt="" />
           <div>
            <span>Calories Incinerated</span>
            <span>220 Kcal</span>
            </div>

          </motion.div>


        </div>
    </div>
  )
}

export default Hero