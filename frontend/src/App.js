import './App.css'; 
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SupervisorHome from './pages/Supervisor';
import PanelMemberHome from './pages/PanelMember';
import SigninPage from './pages/signin';
import LoginPage from './pages/login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TopicAccept from './components/Supervisor/TopicAccept';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <Router>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
         <Routes>
             <Route path='/' element={<SupervisorHome/>} exact/>
             <Route path='/panelmember' element={<PanelMemberHome/>} exact/>
             <Route path='/signin' element={<SigninPage/>} exact/>
             <Route path='/login' element={<LoginPage/>} exact/>
             <Route path='/topic/:id' element={<TopicAccept/>} exact/>
        </Routes>
       <Footer/>
    </Router>
  );
}

export default App;