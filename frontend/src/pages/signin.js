import React from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/form';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

//import auth from '../services/authService'; 
//import { Redirect } from 'react-router-dom';

class SigninPage extends Form {

    state = {
        data: { 
            username:'',
            password:''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    // doSubmit = async ()=>{

    //     try {
    //        await auth.login(this.state.data.username, this.state.data.password);
    //        const { state } = this.props.location;
    //        window.location = state ? state.from.pathname : '/';
    //     } catch (ex) {
    //         if(ex.response && ex.response.status === 400){
    //             const errors = { ...this.state.errors};
    //             errors.username = ex.response.data;
    //             this.setState({ errors });
    //         }
    //     }
       
    // }
     
    render() { 

      // if (auth.getCurrentUser()) return <Redirect to='/'/>;

        return (
        <div style={{background: '#4776E6',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to left, #8E54E9, #4776E6)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to left, #8E54E9, #4776E6)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
         <Navbar />    
        <center>
              <Card className="text-center" 
                    style={{ width: '28rem',
                             marginTop: '10rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}
                    >
      
                   <Card.Body>
                        <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Sign Up</Card.Title>
                        
                  <form onSubmit = {this.handleSubmit}>
        
                       {this.renderInput('username', 'Username')}
                       {this.renderInput('password', 'Password', 'password')}
                       {this.renderButton("Sign Up")}
                  </form>
                    
                  </Card.Body>
                  <Card.Footer>Already have an account?<Link to='/login'>Login</Link></Card.Footer>
 
             </Card>

         </center>
         <Footer/>
        </div>
        )
    }
}
 
export default SigninPage;