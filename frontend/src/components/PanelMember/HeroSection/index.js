import React, { useState, useEffect } from 'react'
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
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home() {

    // [hover, setHover] = useState(false)

    // const onHover = ()=>{
    //     setHover(!hover)
    // }
    
      const [topicList,setTopicList] = useState([]);
    
   useEffect(()=>{
     
    const getTopics = ()=>{
      axios.get('http://localhost:5000/api/groups/all').then((res)=>{
          setTopicList(res.data);
      })
    }

    getTopics();
} ,[]  );
    
  

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
                            
                           <th>View</th>
                           <th>Status</th>
                          
                  
                         </tr>
                       </thead>
                       <tbody>
                      
                          {topicList.map(topic => (
                          <>
                         
                         <tr>
                         
                           <td>{topic.groupId}</td>
                           
                           <td><Link to={`/topic/${topic._id}`} style={{textDecoration:'none'}}><button className='btn btn-primary'>View</button></Link></td>
                           {topic.status ?
                           <td><button className='btn btn-danger'>Pending</button></td>:
                           <td><button className='btn btn-primary'>Evaluated</button></td>}
                           </tr>
                           
                            </>
                        ))}
    
                  
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

}

export default Home;
