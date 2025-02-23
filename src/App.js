import {Navigate, Route, Routes} from 'react-router-dom';
import Signup from './component/Signup';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
