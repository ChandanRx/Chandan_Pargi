import React from 'react'
import covid from '../../assets/projects_images/COVID.jpg'
import todo from '../../assets/projects_images/todoApp.png'
import weather from '../../assets/projects_images/weather.png'
import portfolio from '../../assets/projects_images/portfolio.png'
import guitar from '../../assets/projects_images/guitar-app.png'

const Projects_data =[{
    name : 'TO-DO List',
    image : todo,
    deployed_url : 'https://todo-app-eta-coral.vercel.app/',
    github_url : 'https://github.com/ChandanRx/todo-app',
    category : ['react.js']

},
{
    name : 'Weather - App',
    image : weather,
    deployed_url : 'https://weather-app-mu-jet.vercel.app/',
    github_url : 'https://github.com/ChandanRx/Weather-App',
    category : ['javascript']

},
{
    name : 'Portfolio',
    image : portfolio,
    deployed_url : 'https://chandan-pargi.netlify.app/',
    github_url : 'https://github.com/ChandanRx/rxweb',
    category : ['react.js']

},
{
    name : 'Guitar Chords',
    image : guitar,
    deployed_url : 'https://google.com',
    github_url : 'https://github.com',
    category : ['javascript']

},

]

export default Projects_data;