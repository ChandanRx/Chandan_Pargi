import { animate, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [active ,setActive] = useState('')
    
    useEffect(()=>{
        let currentUrl = window.location.href
        console.log(currentUrl);
        if(currentUrl.endsWith('/'))
        setActive('About')
    else if(currentUrl.endsWith('/projects'))
        setActive('Projects')
    else if(currentUrl.endsWith('/resume'))
          setActive('Resume') 
    },[active])


    const navbar_varient = {
        hidden : {
             y : '-30vh',
             opacity : 0
        },
        visible : {
             y : 0,
             opacity : 1,
             transition : {
                delay : 0.2, duration :0.7 , type : 'spring'
             }
        }
    }

  return (
    <>
       <motion.div className="navbar" 
       variants={navbar_varient} 
       initial= 'hidden'
       animate='visible'
       >
        <div className="navbar_active">
            {active}
        </div>
        <div className="navbar_items">
        {active !== 'About' && 
            <Link to='/'><div className="navbar_item" onClick={()=>{setActive('About')}}>About</div></Link>
            }
            {active !== 'Resume' ? <Link to='/resume'> <div className="navbar_item" onClick={()=>{setActive('Resume')}}>Resume</div> </Link>: null }
            
            {active !== 'Projects' && <Link to='/projects'><div className="navbar_item" onClick={()=>{setActive('Projects')}}>Projects</div></Link> }

        </div>
       </motion.div>
    </>
  );
};

export default Navbar;