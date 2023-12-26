import React, { useState } from 'react'
import Projects_data from './data/Projects_data';
import Project_card from './Project_card';
import { motion } from 'framer-motion';


const Projects = ({project}) => {
  const [projects , setProjects] = useState(Projects_data)
  console.log(projects);

  const [active , setActive] = useState('All')

  const handleFilterCategory = (name) =>{
    const newArray = Projects_data.filter(project => project.category.includes(name))
    setProjects(newArray);
    setActive(name)
  }

  const project_varient = {
    hidden : {
         opacity : 0
    },
    visible : {
         opacity : 1,
         transition : {
            delay : 0.2, duration :0.7,
         }
    }
}

  return (
    <>
        <motion.div className="container projects"
        variants={project_varient}
        initial='hidden'
        animate='visible'
        >
        <div className="projects_navbar">
          <div className={active === 'all' && 'projects_navbar-active'} onClick={() => setProjects(Projects_data)}>all</div>
          <div className={active === 'javascript' && 'projects_navbar-active'} onClick={() => handleFilterCategory('javascript')}>Javascript</div>
          <div className={active === 'react.js' && 'projects_navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
          <div className={active === 'node.js' && 'projects_navbar-active'} onClick={() => handleFilterCategory('node.js')}>Node</div>
          <div className={active === 'react-native' && 'projects_navbar-active'} onClick={() => handleFilterCategory('react-native')}> ReactNative</div>
        </div>
              <div className="row">
                  {
                    Projects_data.map(project =>
                    <Project_card key={project.name} project={project} />
                    )
                  }
              </div>
        </motion.div> 
    </>
  )
}

export default Projects;