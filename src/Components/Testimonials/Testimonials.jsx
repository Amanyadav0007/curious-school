import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    // now we can access ul tag using this slider variable 
    const slider = useRef();
    let tx = 0;


    // logic for back and next btn click
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Unknown</h3>
                                    <span>Lucknow, India</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis magni doloribus non? Assumenda, nobis. Accusamus cumque totam pariatur debitis repudiandae. Hic in atque ipsa! Ab repudiandae eaque rerum! Est.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Aman Yadav</h3>
                                    <span>Lucknow, India</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis magni doloribus non? Assumenda, nobis. Accusamus cumque totam pariatur debitis repudiandae. Hic in atque ipsa! Ab repudiandae eaque rerum! Est.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Unknown</h3>
                                    <span>Lucknow, India</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis magni doloribus non? Assumenda, nobis. Accusamus cumque totam pariatur debitis repudiandae. Hic in atque ipsa! Ab repudiandae eaque rerum! Est.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Pranjul Jaiswal</h3>
                                    <span>Lucknow, India</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis magni doloribus non? Assumenda, nobis. Accusamus cumque totam pariatur debitis repudiandae. Hic in atque ipsa! Ab repudiandae eaque rerum! Est.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials