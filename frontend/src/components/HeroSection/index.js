import React, { Component } from 'react'
import Table from '../common/table'; 
import Like from '../common/like';
import { ServicesCard } from '../Services/ServiceElements';
import { Link } from 'react-router-dom';
import { HeroContainer,
         HeroBg,
         ImgBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
          } from './HeroElements';

class Home extends Component{

    // [hover, setHover] = useState(false)

    // const onHover = ()=>{
    //     setHover(!hover)
    // }
    

    

    render(){
  

    return (
        <HeroContainer id='home'>
            <HeroBg>
                  <ImgBg style={{ background: '#7F00FF',  /* fallback for old browsers */
                                  background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                                  background: 'linear-gradient(to left,#7F00FF, #E100FF)', }}/>
            </HeroBg>
            <HeroContent>
               
                <HeroP>
                    
                </HeroP>

                <ServicesCard>
                       <HeroP>
                         Pending Topics
                       </HeroP>
                     
                </ServicesCard>
               
            </HeroContent>

        </HeroContainer>
            
        
    );
};
}

export default Home;
