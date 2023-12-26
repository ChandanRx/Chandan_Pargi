import React from 'react'
import instagram from '../assets/icons/insta.svg'
import github from '../assets/icons/blue-github.svg'
import pin from '../assets/icons/location.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/chandan-p.svg'
import resume from '../assets/resume.pdf'
import youtube from '../assets/icons/yt.svg'
import linkedin from '../assets/icons/linkedin.svg'
import { motion } from 'framer-motion'


const Sidebar = () => {


    const handleEmail = () =>{
        window.open("mailto:chandan.rxn@gmail.com")
    }

    const sidebar_varinet = {
        hidden : {
            x : '-20vw',
            
        },
        visible : {
            x : 0,
        
            transition : {
               delay : 0.1, duration :0.5 , type : 'spring'
            }
        }
    }

  return (
    <>
        <motion.div className='sidebar' 
        variants={sidebar_varinet}
        initial = 'hidden'
        animate = 'visible'
        >
            <img src={mightycoder} alt="avatar" className='sidebar_avatar' />
            <div className="sidebar_name">Chandan <span>Pargi</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={resume} download='resume.pdf'>
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="image" className='sidebar_icon'/>Download Resume
                </div>
            </a>
            <figure className='sidebar_social-icons my-4'>
                <a href="https://www.linkedin.com/in/chandan-pargi-459272187/"><img src={linkedin} alt="linkedin" className='sidebar_icon mx-2'/></a>
                
                <a href="https://github.com/ChandanRx"><img src={github} alt="image" className='sidebar_icon mx-2'/></a>
                
                <a href="https://www.instagram.com/chandan.pargi/"><img src={instagram} alt="instagram" className='sidebar_icon mx-2'/></a>
                
                <a href="https://www.youtube.com/@rxn013"><img src={youtube} alt="instagram" className='sidebar_icon mx-2'/></a>
            </figure>
            <div className="sidebar_contact my-4 rounded-1">
                <div className="sidebar_location my-3">
                <img src={pin} alt="location" className="sidebar_icon" />
                Ahmedabad , Gujarat</div>
                <div className="sidebar_item ">
                    chandan.rxn@gmail.com
                </div>
                <div className="sidebar_item">
                    9773283615
                </div>
                
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmail}> Email me</div>
        </motion.div>
    </>
  )
}

export default Sidebar;