import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Supervisor';
import SigninPage from './pages/Supervisor/signin';
import LoginPage from './pages/Supervisor/login';

function App() {
  return (
    <Router>
         <Routes>
             <Route path='/' element={<Home/>} exact/>
             <Route path='/signin' element={<SigninPage/>} exact/>
             <Route path='/login' element={<LoginPage/>} exact/>
        </Routes>

    </Router>
  );
}

export default App;