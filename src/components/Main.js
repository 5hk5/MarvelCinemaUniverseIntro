import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Main=()=>{
    return(
        <div className='Main'>
          <Nav></Nav>
          <h2>What is Marvel Cinematic Universe?</h2>
          <p>마블 시네마틱 유니버스(MCU)는 마블 스튜디오의 
            슈퍼히어로물 영화, 드라마가 공유하는 세계관으로,
            <br></br>개봉일 기준 여섯 페이즈로 나뉘고 
            이는 인피니티 사가와 멀티버스 사가로 분류된다. 
            <br></br>현재 페이즈 4가 진행 중이다.
          </p>
          <table border={1}>
            <tbody>
              <tr>
                <td colSpan={6}>마블 시네마틱 유니버스</td>
              </tr>            
              <tr>
                <td colSpan={3}>
                  <NavLink to='/saga/1'>인피니티 사가</NavLink>
                </td>
                <td colSpan={3}>
                  <NavLink to='/saga/2'>멀티버스 사가</NavLink>
                </td>
              </tr>
              <tr>
                <td><NavLink to='/phase/1'>페이즈 1</NavLink></td>
                <td><NavLink to='/phase/2'>페이즈 2</NavLink></td>
                <td><NavLink to='/phase/3'>페이즈 3</NavLink></td>
                <td><NavLink to='/phase/4'>페이즈 4</NavLink></td>
                <td><NavLink to='/phase/5'>페이즈 5</NavLink></td>
                <td><NavLink to='/phase/6'>페이즈 6</NavLink></td>
              </tr>        
            </tbody>    
          </table>
      </div>
    );
}

export default Main;