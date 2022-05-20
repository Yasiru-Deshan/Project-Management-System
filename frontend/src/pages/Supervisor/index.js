import React,{ useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/Supervisor/HeroSection';
import InfoSection from '../../components/Supervisor/InfoSection';
import Footer from '../../components/Footer';
import { homeObjOne,homeObjTwo,homeObjThree  } from '../../components/Supervisor/InfoSection/Data';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        
        
    
        <Footer />
        
        </>
    )
}

export default Home
