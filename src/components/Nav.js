import { NavLink } from "react-router-dom";

const Nav=()=>{
    return(
      <div className='Nav'>
        <NavLink to='/main'>HOME</NavLink>
        <NavLink to='/saga'>SAGA</NavLink>
        <NavLink to='/phase'>PHASE</NavLink>
      </div>
    );
}

export default Nav;