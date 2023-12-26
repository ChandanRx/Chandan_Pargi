import React from 'react'
import dotIcon from '../assets/icons/react.svg'
import Bar from './Bar'
import { motion } from 'framer-motion'

const languages = [
  {
    icon:dotIcon,
    name:'React Js',
    level:'80'
  },
  {
    icon:dotIcon,
    name:'Node JS',
    level:'60'
  },
  {
    icon:dotIcon,
    name:'Express Js',
    level:'60'
  },
  {
    icon:dotIcon,
    name:'Next Js',
    level:'50'
  },
  {
    icon:dotIcon,
    name:'React Native',
    level:'70'
  },
]

const tools = [
  {
    icon:dotIcon,
    name:'Visual Studio Code',
    level:'80'
  },
  {
    icon:dotIcon,
    name:'Chrome Developer Tools',
    level:'85'
  },
  {
    icon:dotIcon,
    name:'Git',
    level:'60'
  },
  {
    icon:dotIcon,
    name:'Sublime Text',
    level:'70'
  },
]

const resume_varient = {
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

const Resume = () => {
  return (
    <>
        <motion.div className="container resume"
        variants={resume_varient}
        initial='hidden'
        animate='visible'
        >
          <div className="row">
            <div className="col-lg-6 resume-card">
              <h4 className="resume-card_heading">
                Education
              </h4>
              <div className="resume-card_body">
                <h5 className="resume-card_title">
                  Bachelor of Engineering
                </h5>
                <p className="resume-card_name">
                  GEC,Gandhinagar (2022)
                </p>
                <p className="resume-card_details">
                  I am graduated in BE in Information Technology Engineering From Government Engineering College , Gandhinagar
                </p>
              </div>
             </div>

             <div className="col-lg-6 resume-card">
              <h4 className="resume-card_heading">
                Experience
              </h4>
              <div className="resume-card_body">
                <h5 className="resume-card_title">
                  Internship
                </h5>
                <p className="resume-card_name">
                  Unnati Informatics LLP.
                </p>
                <p className="resume-card_details">
                  I Work as React Intern in Unnati Informatics and i worked on project name model united nation where i created ui using react js.
                </p>
              </div>
              
            </div>

          </div>
          <div className="row">
            <div className="col-lg-6 resume-languages">
              <h5 className="resume-language_heading">
                Language and Framework
              </h5>
              <div className="resume-language_body my-2">
                {
                  languages.map(language=>
                  <Bar value={language}/>)
                }
              </div>
            </div>
            <div className="col-lg-6 resume-languages">
              <h5 className="resume-language_heading">
                Tools and Software
              </h5>
              <div className="resume-language_body my-2">
                {
                  
                  tools.map(tool=>
                  <Bar value={tool}/>)
                
                }
              </div>
            </div>
          </div>
        </motion.div>
    </>
  )
}

export default Resume;