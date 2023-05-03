import { Route, Routes, NavLink } from "react-router-dom";
import Nav from "./Nav";

const Saga=()=>{
    let saga=[
      {content:'MCU의 서막인 아이언맨부터 에필로그에 해당하는 스파이더맨: 파 프롬 홈까지 MCU의 1막이 되는 23편의 영화를 일컫는다. 인피니티 스톤이 중심 소재로 등장하며, 메인 빌런은 타노스다.'},
      {content:'인피니티 사가 이후 MCU 페이즈 4의 완다비전부터 페이즈 6의 어벤져스: 시크릿 워즈까지 마블 시네마틱 유니버스의 2막이 되는 영화와 드라마 작품을 이른다. 한 유니버스 위주로 갔던 인피니티 사가와 달리 멀티버스를 탐험하고, 다른 멀티버스에서 빌런과 히어로가 등장한다.'}
    ];
  
    let list=[];
    for (let i=1;i<7;i++){
      list.push(
        <li key={i}>
          <NavLink className='phaseLi' to={'/phase/'+i}>{'페이즈 '+i}</NavLink>
        </li>
      );
    }

    const SagaContent1=()=>{
      return(
        <div>
          <img className='sagaImg1' alt='saga' src='../img/infinity.jpg'></img>
          <p>{saga[0].content}</p>
          <ul>{list.slice(0,3)}</ul>
        </div>
      );
    }

    const SagaContent2=()=>{
      return(
        <div>
          <img className='sagaimg2' alt='saga' src='../img/multiverse.jpg'></img>
          <p>{saga[1].content}</p>
          <ul>{list.slice(3,6)}</ul>
        </div>
      );
    }
  
    return(
      <div className='Saga'>
        <Nav></Nav>
        <ul>
          <NavLink to='/saga/1'>인피니티 사가</NavLink>
          <NavLink to='/saga/2'>멀티버스 사가</NavLink>
        </ul>
        <Routes>
          <Route path='/1' element={<SagaContent1></SagaContent1>}></Route>
          <Route path='/2' element={<SagaContent2></SagaContent2>}></Route>
        </Routes>
      </div>
    );
  }

export default Saga;