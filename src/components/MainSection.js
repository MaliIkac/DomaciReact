import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './MainSection.css';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function MainSection() {

  const teachers = [
    {
        name: 'Emily Henderson',
        text: 'Emily is a stylist with a strong commitment to vintage inspired approachable home style for every person. After styling for magazines for years, she started her own design blog and went on to host her own show and created the design firms.',
        src: Image1
    },
    {
        name: 'Jeff Staple',
        text: 'Jeff Staple is a creative visionary with work encompassing graphic design, fashion design, footwear design, and brand marketing. He has worked on creative projects ranging from startup brands to Fortune 100 companies.',
        src: Image2
    },
    {
        name: 'Justin Bridges',
        text: 'Justin Bridges is a fashion and portrait photographer based in New York City. Originally from Atlanta, Georgia, Justin began his pursuit of photography as a college student studying finance and economics.',
        src: Image3
    }
];  

  return (
    <>
    <div className='main-container'>
      <image src='../assets/home-cover.jpg'/>
      <h1>SKILLSHARE</h1>
      <p>Explore your creativity.</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/courses'
        >
          START NOW
        </Button>
      </div>
    </div>
    <div className='main-text'>
    <h1>Create Your Dream Career</h1>
      <p>
      Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.
      With so much to explore, real projects to create, and the support of fellow-creatives, Skillshare’s online learning platform empowers you to learn new skills and accomplish real growth.
      </p>
      <p>
      Move your creative journey forward without putting life on hold. Skillshare’s short online classes help you find inspiration that fits your routine.
      </p>
    </div>
    <div className='main-teachers'>
      <Cards title='Classes Taught by Real Creators' data1={teachers} type='teachers'></Cards>
    </div>
    </>
    
  );
}

export default MainSection;
