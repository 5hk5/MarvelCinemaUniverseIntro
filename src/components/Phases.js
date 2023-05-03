import { useParams } from "react-router-dom";

let phaseContent=[
    {desc:'페이즈 1은 히어로들의 탄생과 기원, 그리고 어벤저스의 결성을 보여준다. 어벤져스 이전에는 각 작품마다 개별적인 이야기를 다루었는데 스타크 인더스트리, 하워드 스타크 같은 연결 요소를 등장시키거나 쿠키 영상을 통해 같은 시리즈임을 강조한다. 그리고 페이즈 1의 마지막 영화 어벤져스가 개봉하면서 작품들이 모두 이어지게 된다.'},
    {desc:'페이즈 2는 히어로들에 의해 변해가는 세상을 보여준다. 또한 우주까지 세계관을 확장해가면서 인피니티 스톤에 대해 심도있게 다룬다.'},
    {desc:'페이즈 3은 인피니티 사가의 마지막 시즌이자 실질적인 클라이막스이다. 어벤져스의 분열부터 세계적인 재앙, 어벤져스의 재결성, 그리고 그 이후의 사회상을 보여준다. 인피니티 사가 종료 후 주요 소재가 될 멀티버스를 소개하며, 히어로 세대 교체의 시작점이 된다.'},
    {desc:'페이즈 4에서는 멀티버스의 본격적인 도입, 새로운 히어로 소개, 그리고 엔드게임의 후일담이 핵심이다. 최근 스파이더맨: 노 웨이 홈에서는 MCU와 별개의 영화 세계관에서 나온 인물들을 멀티버스라는 소재를 통해 등장시켰으며, 닥터 스트레인지: 대혼돈의 멀티버스에선 여러 모습의 멀티버스를 보여주며 개념을 확장시켰다.'},
    {desc:'페이즈 5에서는 페이즈 4에서 언급된 캉, 인커전, 멀티버스 등에 대해 심도있게 다룰 것으로 예상된다. 앤트맨과 와스프: 퀀텀매니아에서 캉의 등장을 예고했으며 다중 차원과 우주가 주 배경이 될 예정이다'},
    {desc:'페이즈 6의 최종편인 어벤져스: 시크릿 워즈에서 원작 코믹스의 사건인 시크릿 워즈를 선보일 것으로 예상된다.'},  
  ];
  
  const Phases=()=>{
    let params=useParams();
    console.log(params);
    let _id=params.phase_id;
    let selectedContent={desc:''};
    let imgPhases=[];
    let imgI=[6,6,11,6]; //페이즈 별 이미지 개수
  
    for(let i=0;i<6;i++){
      if(i+1===Number(_id)){ //세팅된 id값 === 선택한 id
        selectedContent=phaseContent[i];
        if(i<4){ //페이즈1~4 이미지 추가
          for(let j=0;j<imgI[i];j++){
            imgPhases.push(<li key={(i+1)+"_"+(j+1)}><img alt='phaseImg' src={'/img/phase'+(i+1)+'_'+(j+1)+'.jpg'}></img></li>);
          }
        } else{ //페이즈5,6 텍스트만 추가
          imgPhases.push(<h3>Coming soon</h3>);
        }
        break;
      }
    }
  
    return(
      <div className='Phases'>
        <p>{selectedContent.desc}</p>
        <h2>Movies</h2>
        <ul>{imgPhases}</ul>
      </div>
    );
}

export default Phases;