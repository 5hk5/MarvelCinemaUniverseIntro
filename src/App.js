import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Saga from './components/Saga';
import Opening from './components/Opening';
import Main from './components/Main'
import Phase from './components/Phase';

const App=()=>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Opening></Opening>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/saga/*' element={<Saga></Saga>}></Route>
        <Route path='/phase/*' element={<Phase></Phase>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;