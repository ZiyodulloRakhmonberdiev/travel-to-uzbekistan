import { useEffect } from 'react'
import Aos from 'aos'
import { GrLocation } from 'react-icons/gr'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { HiFilter } from 'react-icons/hi'
import { TbApps } from 'react-icons/tb'
import video from '../../assets/videos/ocean.mp4'
import './home.scss'
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])
    return (
    <section className='home'>
        <div className="overlay"></div>
        <video src={video} autoPlay muted loop type='video/mp4'></video>

        <div className="homeContent container">
            <div className="textDiv" data-aos="fade-up">
                <span  className="smallText">
                Are you ready?
                </span>
                <h2 className="homeTitle">
                Welcome to Uzbekistan!
                </h2>
            </div>
            <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
                    <label htmlFor="city">Search your destination</label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter name here...' />
                        <GrLocation className="icon" />
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date">Select date</label>
                    <div className="input flex">
                        <input type="date" />
                    </div>
                </div>
                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className='total'>$8000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" name="" max="8000" min="1000" id="" />
                    </div>
                </div>

                <div className="searchOptions flex">
                    <HiFilter className="icon" />
                    <span>
                        More filters
                    </span>
                </div>
            </div>
            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className='icon' />
                    <AiOutlineInstagram className='icon' />
                    <SiTripadvisor className='icon' />
                </div>
                <div className="leftIcons">
                    <BsListTask className='icon' />
                    <TbApps className='icon' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home