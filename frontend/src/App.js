import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import LoginPage from './pages/login';

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