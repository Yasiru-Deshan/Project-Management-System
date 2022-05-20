import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SupervisorHome from './pages/Supervisor';
import PanelMemberHome from './pages/PanelMember';
import SigninPage from './pages/signin';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
         <Routes>
             <Route path='/' element={<SupervisorHome/>} exact/>
             <Route path='/panelmember' element={<PanelMemberHome/>} exact/>
             <Route path='/signin' element={<SigninPage/>} exact/>
             <Route path='/login' element={<LoginPage/>} exact/>
        </Routes>

    </Router>
  );
}

export default App;