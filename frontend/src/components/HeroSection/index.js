import React, { Component } from 'react'
import Table from '../common/table'; 
import Like from '../common/like';
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp,
         TableCard } from '../Services/ServiceElements';
import {getMovies} from '../../services/fakeMovieService';
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
import { Button } from '../ButtonElements';

class Home extends Component{

    // [hover, setHover] = useState(false)

    // const onHover = ()=>{
    //     setHover(!hover)
    // }
    
   state = {
     movies: getMovies()
   }
    

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
                        {this.state.movies.map(movie => (
                         <tr>
                          <td>{movie.genre.name}</td>
                           
                           <td><Button>View</Button> </td></tr>
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
                        {this.state.movies.map(movie => (
                         <tr>
                          <td>{movie.genre.name}</td>  
                           <td><Button>View</Button></td>
    </tr>
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
            
        
    );
};
}

export default Home;
