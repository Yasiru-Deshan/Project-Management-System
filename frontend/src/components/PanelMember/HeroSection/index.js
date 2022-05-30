import React, { Component } from 'react'
import Table from '../../common/table'; 
import Like from '../../common/like';
import Icon2 from '../../../images/svg-2.svg'
import Icon3 from '../../../images/svg-3.svg'
import { ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         TableCard } from '../Services/ServiceElements';
import { HeroContainer,
         HeroBg,
         ImgBg,
         HeroContent,
         HeroP,
          } from './HeroElements';
import { Button } from '../../ButtonElements';
import Modal from 'react-modal';

class Home extends Component{

    // [hover, setHover] = useState(false)

    // const onHover = ()=>{
    //     setHover(!hover)
    // }
    
   
    

    render(){
  

    return (
        <HeroContainer id='home' >
            <HeroBg>
                  <ImgBg style={{ background: '#7F00FF',  /* fallback for old browsers */
                                  background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                                  background: 'linear-gradient(to left,#7F00FF, #E100FF)', }}/>
            </HeroBg>
            <HeroContent style={{margin: '0px 0px 0px 50px'}}>


              <ServicesContainer>
                <ServicesWrapper>

                 <TableCard  >
                       <HeroP>
                         Topic Evaluation
                       </HeroP>
                     

                     <table className='table'>
                       <thead>
                         <tr>
                           <th>Group ID</th>
                           <th>Date</th>
                           <th>View</th>
                           <th>Status</th>
                          
                  
                         </tr>
                       </thead>
                       <tbody>
                      
                         <tr>
                           <td>SE_3040</td>  
                           <td>11/4/2022</td>
                           <td><Button>https://www.dropbox.com/s/0sn4pdcz9q163vk</Button></td>
                           <td><Button>Pending</Button></td>
                          
    </tr>
    <tr>
                           <td>SE_3040</td>  
                           <td>11/4/2022</td>
                           <td><Button>https://www.dropbox.com/s/0sn4pdcz9q163vk</Button></td>
                           <td><Button>Pending</Button></td>
                          
    </tr>
    <tr>
                           <td>SE_3040</td>  
                           <td>11/4/2022</td>
                           <td><Button>https://www.dropbox.com/s/0sn4pdcz9q163vk</Button></td>
                           <td><Button>Pending</Button></td>
                          
    </tr>
                  
                       </tbody>
                     </table>
                </TableCard>
                 <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <HeroP>Marking Schemes</HeroP>
            
                </ServicesCard>
               </ServicesWrapper>
               </ServicesContainer>

              
              
            </HeroContent>

        </HeroContainer>
            
        
    );
};
}

export default Home;
