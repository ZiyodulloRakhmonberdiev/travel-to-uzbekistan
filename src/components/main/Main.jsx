import { useEffect } from 'react'
import Aos from 'aos'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import './main.scss'
import "aos/dist/aos.css"

const data = [
    {
        id: 1,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 2,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 3,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 4,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 5,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 6,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 7,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 8,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
    },
    {
        id: 9,
        img: "https://picsum.photos/300",
        destTitle: "Kokand",
        location: "Uzbekistan",
        grade: "Cultural relax",
        fees: "$700",
        description: "The city of Kokan, which served as the center of the huge Kokan khanate for several centuries, is much more developed today."
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