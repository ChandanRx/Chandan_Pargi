import React from 'react'
import Skillcard from './Skillcard'
import javascript from '../assets/icons/java-script.svg'
import react from '../assets/icons/react-native.svg'
import node from '../assets/icons/logo-nodejs.svg'
import express from '../assets/icons/express-js.svg'
import next from '../assets/icons/nextjs.svg'
import reactNative from '../assets/icons/react-js.svg'
import { motion } from 'framer-motion'

const skills = [
  {
    icon :javascript,
    title:'Javascript',
    about:'It is a programming language used to creating dynamic and interactive elements on web pages'
  },
  {
    icon :react,
    title:'React Js',
    about:'React Js is a javascript librery used for a building user interfaces'
  },
  {
    icon :node,
    title:'Node Js',
    about:'Node js is a javascript runtime environment that allows developers to run javascript code outside of web browser'
  },
  {
    icon :express,
    title:'Express Js',
    about:'Express js is a minimal and flexible web application framework for node.js'
  },
  {
    icon :reactNative,
    title:'React Native',
    about:'React Native is a framework for building mobile applications using javascript and React'
  },
  {
    icon :next,
    title:'Next Js',
    about:'Next Js is a framework for building server-rendered React Application'
  }
]

const about_varient = {
  hidden : {

       opacity : 0
  },
  visible : {
       opacity : 1,
       transition : {
          delay : 0.2, duration :0.7 ,
       }
  }
}


const About = () => {
  return (
    <>
        <motion.div className="about"
        variants={about_varient}
        initial='hidden'
        animate='visible'
        >
          <h6 className="about_intro">
            Hey There!👋 I'm Chandan Pargi , a web developer with a passion for creating awesome digital experiences using ReactJS , React Native , Node js , Next js. let's collaborate and create some mind-blowing project together! 💻
           </h6>
          <div className="container about_container rounded-1">
            <h6 className="about_heading">
              What I Know
            </h6>
            <div className="row">
               {
              skills.map(skill=>
             <Skillcard skill={skill}/>
              )
              }
            </div>
          </div>
        </motion.div>
    </>
  )
}

export default About;