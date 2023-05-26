import { useEffect } from 'react'
import Aos from 'aos'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'


import kokand from '../../assets/images/kokand.jpg'
import tashkent from '../../assets/images/tashkent.jpg'
import bukhara from '../../assets/images/bukhara.jpg'
import margilan from '../../assets/images/margilan.jpg'
import samarkand from '../../assets/images/samarkand.webp'
import shohimardon from '../../assets/images/shohimardon.webp'
import surkhan from '../../assets/images/surkhan.jpg'
import zomin from '../../assets/images/zomin.webp'
import namangan from '../../assets/images/namangan.webp'


import './main.scss'
import "aos/dist/aos.css"

const data = [
    {
        id: 1,
        img: kokand,
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Historical culture",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 2,
        img: tashkent,
        destTitle: "Tashkent",
        location: "Uzbekistan",
        grade: "Modern",
        fees: "$1200",
        description: "Tashkent is considered the capital city, and the service is very good"
    },
    {
        id: 3,
        img: margilan,
        destTitle: "Margilan",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$800",
        description: "The city of Margilon is one of the most historic cities and has several secrets of experience and history in the manufacture and export of satin and adras fabrics."
    },
    {
        id: 4,
        img: samarkand,
        destTitle: "Samarkand",
        location: "Uzbekistan",
        grade: "Historical",
        fees: "$900",
        description: "The city of Samarkand has a rich history and was the capital of the Timurid state"
    },
    {
        id: 5,
        img: zomin,
        destTitle: "Zomin",
        location: "Uzbekistan",
        grade: "Relax, Nature",
        fees: "$500",
        description: "Zomin is a city located in Jizzah region. The air is clean, there are thousands of fir trees. A resort with healing air and water"
    },
    {
        id: 6,
        img: bukhara,
        destTitle: "Bukhara",
        location: "Uzbekistan",
        grade: "Historical region",
        fees: "$1000",
        description: "Bukharai Sharif, one of the centers of Islamic civilization, has a rich history. Historical monuments have been preserved until now"
    },
    {
        id: 7,
        img: shohimardon,
        destTitle: "Shokhimardan",
        location: "Uzbekistan",
        grade: "Nature",
        fees: "$700",
        description: "Shahimardan is a mountainous region belonging to Uzbekistan located in the territory of Kyrgyzstan. The air is very clean, the scenery is beautiful"
    },
    {
        id: 8,
        img: namangan,
        destTitle: "Namangan",
        location: "Uzbekistan",
        grade: "Nature",
        fees: "$400",
        description: "Mountainous resort with clean air and a large area for recreation"
    },
    {
        id: 9,
        img: surkhan,
        destTitle: "Surkhandarya",
        location: "Uzbekistan",
        grade: "Nature",
        fees: "$700",
        description: "It is a mountainous resort with beautiful scenery and many waterfalls"
    }
]

const Main = () => {
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])
    return (
    <section className="main container section">
        <div className="secTitle">
            <h3 className="title">
                Most visited destinations
            </h3>
        </div>
        <div className="secContent grid">
            {
                data?.map(({id, img, destTitle, location, grade, fees, description}) => {
                    return (
                        <div data-aos="fade-up" key={id} className="singleDestination">
                            <div className="imgDiv">
                                <img src={img} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className='destTitle'>{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon' />
                                    <span className='name'>{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade} <small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon" />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Main