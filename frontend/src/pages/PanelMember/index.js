import React,{ useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/PanelMember/HeroSection';
import InfoSection from '../../components/PanelMember/InfoSection';
import Footer from '../../components/Footer';
import { homeObjOne,homeObjTwo,homeObjThree  } from '../../components/PanelMember/InfoSection/Data';


const Home = () => {

    return (
        <>
   
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        
        
    
        </>
    )
}

export default Home
