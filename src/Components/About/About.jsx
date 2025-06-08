import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src= {about_img} alt="" className='about-img'/>
                <img src= {play_icon} alt="" className='play-icon'/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam nesciunt quis.lor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aliquam veniam esse modi nemo repellat! Commodi quae vel quos perferendis dolorum sunt, deleniti reprehenderit? Enim laudantium minima cumque reprehenderit adipisci!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur explicabo molestias porro aliquid sunt deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ut fugiat veritatis, voluptatibus autem error exercitationem dicta atque obcaecati excepturi perferendis, odio reiciendis aut, accusamus cum labore. Doloremque, praesentium sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis modi veritatis neque. Reprehenderit officiis sunt, sit magni voluptas, porro incidunt.</p>
            </div>
        </div>
    )
}

export default About