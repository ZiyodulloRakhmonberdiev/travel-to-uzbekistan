import { useEffect } from 'react'
import Aos from 'aos'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import uzbekistan from '../../assets/images/rmuzb.png'
import video from '../../assets/videos/ocean.mp4'
import './footer.scss'
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <section className="footer">
        <div className="videoDiv">
            <video src={video} muted autoPlay type="video/mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
                <div data-aos="fade-up" className="inputDiv flex">
                    <input type="text" name="" id="" placeholder='Enter Email' />
                    <button className="btn flex">
                        SEND <FiSend className="icon" />
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <img src={uzbekistan} alt="" style={{width: "140px"}}  />
                        </a>
                    </div>
                    <div className="footerParagraph">
                    The gladdest moment in human life, methinks, is a departure into unknown lands. Travel makes one modest. You see what a tiny place you occupy in the world. The man who goes alone can start today; but he who travels with another must wait till that other is ready
                    </div>
                    <div className="footerSocials">
                        <AiOutlineTwitter className='icon' />
                        <AiFillInstagram className='icon' />
                        <AiFillYoutube className='icon' />
                        <FaTripadvisor className='icon' />
                    </div>
                </div>
                    <div className="footerLinks grid">
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="2000">
                            <span className="groupTitle">
                                Our Agency
                            </span>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>
                        <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                            <span className="groupTitle">
                                Partners
                            </span>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                UzTour
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Carnaval
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerlist flex">
                                <FiChevronRight className='icon' />
                                Paynet
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>Make travel for HEALTH</small>
                        <small>COPYRIGHTS RESERVED - OID_2022</small>
                    </div>    
            </div>
        </div>
    </section>
  )
}

export default Footer