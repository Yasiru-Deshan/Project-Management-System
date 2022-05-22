import React, { Component,useEffect,useState } from 'react'
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
import Modal from 'react-modal';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(){

    // [hover, setHover] = useState(false)

    // const onHover = ()=>{
    //     setHover(!hover)
    // }
   const [topicList,setTopicList] = useState([]);
   const [mdal,setModal] = useState(false);
   const [title,setTitle] = useState("");
   const [group,setGroup] = useState("");
   const [description,setDescription] = useState("");
   const [status,setStatus] = useState();
  

   useEffect(()=>{
     
    const getTopics = ()=>{
      axios.get('http://localhost:8070/api/topics/all').then((res)=>{
          setTopicList(res.data);
      })
    }

    getTopics();
} ,[]  );



    return (
       
  <div>

 <HeroContainer id='home'>
            <HeroBg>
                  <ImgBg style={{ background: '#7F00FF',  /* fallback for old browsers */
                                  background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                                  background: 'linear-gradient(to left,#7F00FF, #E100FF)', }}/>
            </HeroBg>
            <HeroContent>
               
                <HeroP>
                    
                </HeroP>

              <ServicesContainer>
                <ServicesWrapper>
                <TableCard>
                       <HeroP style={{color:'red'}}>
                         Pending Topics
                       </HeroP>
                     

                     <table className='table'>
                       <thead>
                         <tr>
                           <th>Group ID</th>
                           
                           <th></th>
                        
                         </tr>
                       </thead>
                       <tbody>
                        {topicList.map(topic => (
                          <>
                         {topic.status ?
                         <tr>
                         
                           <td>{topic.groupId}</td>
                           
                           <td><Link to={`/topic/${topic._id}`}><Button>View</Button></Link></td>
                          
                           </tr>
                            : null}
                            </>
                        ))}
                       </tbody>
                     </table>
                </TableCard>

                 <TableCard>
                       <HeroP>
                         Approved Topics
                       </HeroP>
                     

                     <table className='table'>
                       <thead>
                         <tr>
                           <th>Group ID</th>
                           <th></th>
                  
                         </tr>
                       </thead>
                       <tbody>
                        {topicList.map(topic => (
                            <>
                         {topic.status ? null :
                         <tr>
                          <td>{topic.groupId}</td>  
                           <td><Button>View</Button></td>
                         </tr>
                         }
                         </>
                        ))}
                       </tbody>
                     </table>
                </TableCard>
                    <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <HeroP>Marking Schemes</HeroP>
            
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <HeroP>Final Evaluation</HeroP>
                   
                </ServicesCard>

                
               </ServicesWrapper>
               </ServicesContainer>
            </HeroContent>

        </HeroContainer>
            
     </div>   
    );

}

export default Home;
