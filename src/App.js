import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Enrolledm from './components/pages/Enrolledm';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [coursNum, setCoursNum] = useState(0); /*ovo je stanje za korpu u navbaru */

  const s1 = [
    {
        id: 1,
        times: 0,
        star: 356,
        checked: false,
        name: 'Build a Sharp Online Presence',
        added: false,
        date: '30th Jun 2022 09:30 AM',
        text: 'Sonja believes that you can have exactly the career that you want, and she’s here to help you get it. This is exactly what you need to start your creative career — right now! From metrics to social media best practices to website style, Sonja’s seen it all in her long career as a consultant and successful small business owner, and she knows exactly what most people get wrong.',
        src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/ddc2c953a2fb5cb7685b90c603cc94d4/original'
    },
    {
        id: 2,
        times: 0,
        star: 130,
        checked: false,
        name: 'How to start writing your memoir',
        added: false,
        date: '3th July 2022 09:30 AM',
        text: 'Through a series of writing exercises, Mary guides you through the tangled process of writing memoir and makes it clear, distinct, and actionable. Using clear and actionable instruction paired with practical (and beautiful) examples across generations of memoirists, Mary makes the mystifying and sometimes painful process of writing about yourself feel not only possible, but right within your reach.',
        src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/f2889518cfdc1eca478d6fcc46817fd8/original'
    },
    {
        id: 3,
        times: 0,
        star: 211,
        checked: false,
        added: false,
        date: '4th July 2022 09:30 AM',
        name: 'How to build habits that last',
        text: 'Join Thomas Frank, productivity expert, author, and YouTuber, in this comprehensive class that will help you build sustainable habits without once feeling like a failure. Seriously! Through research, experience, and his own trial-and-error, Thomas has laid out the groundwork for lasting habits, and is here to share his experience with you and get your Impossible List off on the right foot.',
        src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/00cbb9867e2d7ae26cd3a142808e7aac/original'
    },

];

const s2 = [
  {
      id: 4,
      times: 0,
      star: 5,
      checked: false,
      name: 'Using Color, Contrast and Scale',
      added: false,
      date: '18th August 2022 09:30 AM',
      text: 'Join Cyn in the photo studio for a class that will make you see your camera roll in a whole new light. Known for her vibrant style and a strong point of view, Cyn believes that visual language is one of our most powerful tools of connection, regardless of culture or language. In her own work, Cyn has learned to let go of concentrating on technical skills and focuses instead on color, contrast, and scale to transform her photos from a standard image into a story. ',
      src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/3c5297a99c2b5a5b367e991fc35a942a/original'
  },
  {
      id: 5,
      times: 0,
      star: 98,
      checked: false,
      added: false,
      date: '13th Sept 2022 09:30 AM',
      name: 'Adding movement with Photoshop',
      text: 'Jump into the world of animation with illustrator Libby— using only Procreate and Photoshop! From planning a sketch with motion in mind to sharing your final work on the web, Libby will teach you everything you need to know to create your very own animated illustration!It’s easier than you think. Libby will show you how to add motion to your work with just a few simple tweaks to your original illustration.Plus, Libby shares her favorite tips and tricks to get the most out of Procreate.',
      src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/26958a404e522c9428f9e9b13f662f48/original'
  },
  {
      id: 6,
      times: 0,
      star: 145,
      checked: false,
      added: false,
      date: '28th Jun 2022 09:30 AM',
      name: 'The Power of Personal Branding',
      text: 'This class is mostly for people who want to discover, articulate, express, and build their personal brands online. But it’s just as valuable for those with relatively well-established presences, as it can serve as a refresher with new ideas and practical advice on how to improve. You’re doing incredible things. But are you telling people? Don’t leave it up to someone else to tell your story.To complete the class, you wll just need a computer, some paper, and your favourite writing utensil.',
      src: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/c96f8fdb49f437a527c5e8abfb4cd627/original'
  },

];

const [courss, setCourss] = useState([]); /*ovo je verovatno neki niz appointmentsa koji je na pocetku prazan*/
 
const [courses1, setCour1] = useState(s1); /*prvi niz usluga koji je na pocetku s1*/

const [courses2, setCour2] = useState(s2); /*drugi niz usliga koji je na pocetku s2*/

/*ova funkcija star1 prima kao ulazni parametar scourseid i prolazi kroz ceo niz i uporedjuje id*/

const star1 = (courseId) => {
  let arr1 = [];
  courses1.forEach(element => {
    if(element.id == courseId) {
    if(!element.checked) {
      console.log(element);
      element.star = element.star + 1;
      element.checked = true;
      console.log(element);
      arr1.push(element); /*dodaj element u arr1*/
      
    } 
  }else{
    arr1.push(element); /*svakako ga dodaje u niz, ovo je funkcija samo za povecanje zvezdice*/
  }
  });
  setCour1(arr1);
  console.log(courses1);
  
  let arr2 = [];
  courses2.forEach(element => {
    if(element.id == courseId) {
    if(!element.checked) {
      element.star = element.star + 1;
      element.checked = true;
      arr2.push(element);
      
    }
  }
  else{
    arr2.push(element);
  }
  });
  setCour2(arr2);
  console.log(courses2);
}
/*sledeca funkcija je za uklanjanje zvezdice*/
const star2 = (courseId) => {
  let arr1 = [];
  courses1.forEach(element => {
    if(element.id == courseId) {
    if(element.checked) {
      element.star = element.star - 1;
      element.checked = false;
      console.log(element);
      arr1.push(element);
    }
  }
  else{
    arr1.push(element);
  }
  });
  setCour1(arr1);
  
  let arr2 = [];
  courses2.forEach(element => {
    if(element.id == courseId) {
    if(element.checked) {
      element.star = element.star - 1;
      element.checked = false;
      arr2.push(element);
    }
  }
  else{
    arr2.push(element);
  }
  });
  setCour2(arr2);
}
/*funkcija za startKursa, isto prima kao parametar id*/

const startCour = (courseId) => {
  //console.log(courseId);
  courses1.forEach(element => {
    if(element.id === courseId) {
      if(element.added === false) {
        setCoursNum(coursNum+1);
        element.added = true;
      }
    }
  });
  courses2.forEach(element => {
    if(element.id === courseId) {
      if(element.added === false) {
        setCoursNum(coursNum+1);
        element.added = true;
      }
    }
  });
  let addedCourses1 = courses1.filter((item) => item.added == true);
  let addedCourses2 = courses2.filter((item) => item.added == true);
  let addedCourses = [...addedCourses1, ...addedCourses2];
  //console.log(addedCourses);
  setCourss(addedCourses);
}
/*popuni niz zakazanih termina*/
const deleteCour = (courseId) => {
  //.log(courseId);

  courss.forEach(element => {
    if(element.id == courseId) {
      if(element.added === true) {
        setCoursNum(coursNum-1);
        element.added = false;
      }
    }
  });

  let newCour = courss.filter((item) => item.added == true);
  setCourss(newCour);
}

  return (
    <BrowserRouter className="App">
      <Navbar num={coursNum}></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses courses1={courses1} courses2={courses2} 
          startCourse={startCour} star1={star1} star2={star2} />}/>
        <Route path="/enrolledm" element={<Enrolledm data={courss} deleteCourse={deleteCour} />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
