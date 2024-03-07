import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hey, I'm <span className="font-semibold">Jaehyun</span>,
            <br />
            Fiqih's twin, sharing more than just genes but 
            <br />
            also plenty of laughs together. 😄
        </h1>
    ),
    2: (
        <InfoBox text="Working at SM Entertaiment" link="/about" btnText="Learn More"/>
    ),
    3: (
        <InfoBox text="He has lots of easy listening music to enjoy." link="/projects" btnText="Visit my Portfolio"/>
    ),
    4: (
        <InfoBox text="Do you need singing along to all that easy listening music?" link="/contact" btnText="Let's talk"/>
    ),
}

const Homeinfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default Homeinfo