import { Route, Routes, NavLink } from "react-router-dom";
import Nav from "./Nav";
import Phases from "./Phases";

const Phase=()=>{
    let list=[];
    for (let i=1;i<7;i++){
      list.push(
        <li key={i}>
          <NavLink className='phaseLi' to={'/phase/'+i}>{'페이즈 '+i}</NavLink>
        </li>
      );
    }
  
    return(
      <div className='Phase'>
        <Nav></Nav>
        <div  className='phaseList'>{list}</div>
        <Routes>
          <Route path={':phase_id'} element={<Phases></Phases>}></Route>  
        </Routes>    
      </div>
    );
}

export default Phase;