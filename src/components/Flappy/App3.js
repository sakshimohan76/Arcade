import { useEffect, useState } from 'react';
import '../../Flappy.css';
import { Link } from 'react-router-dom';
function App3() {
  const wall_h=500;
  const wall_w=600;
  const bird_h=34;
  const bird_w=34;
  const gravity=5;
  const obj_speed=6;
  const obj_w=52;
  const obj_gap=170;
  const [birdPos,setBirdPos]=useState(300)
  const [isStart,setIsStart]=useState(false)
  const [obj_h,setobj_h]=useState(200)
  const [objPos,setObjPos]=useState(wall_w)
  const [score,setScore]=useState(0)
  const bottomObj=wall_h-obj_h-obj_gap;

  useEffect(()=>{
    let birdval;
    if(isStart && birdPos<wall_h-bird_h){
      birdval=setInterval(()=>{
        setBirdPos((birdPos)=>birdPos+gravity)
      },24);
    }
    return ()=>clearInterval(birdval);
  });

  useEffect(()=>{
    let objval;
    if(isStart && objPos>=-obj_w)
    {
      objval=setInterval(()=>{
        setObjPos((objPos)=>objPos-obj_speed)
      },24)
    }
    else{
      setObjPos(wall_w)
      setobj_h(Math.floor(Math.random()*(wall_h-obj_h)))
      if(isStart) setScore((score)=>score+1)
    }
    return ()=>clearInterval(objval)
  },[isStart,objPos]);

  useEffect(()=>{
    let topobj=birdPos>=0 && birdPos<obj_h;
    let botobj=birdPos<=wall_h && birdPos>wall_h-bottomObj-bird_h;
    if(objPos>=obj_w && objPos<=obj_w+80 &&(topobj||botobj))
    {
      setIsStart(false)
      setBirdPos(300)
      setScore(0)
    }
  },[birdPos,obj_h,objPos,bottomObj])
  const handler=()=>{
    if(!isStart) setIsStart(true)
    if(birdPos<bird_h)
    {
      setBirdPos(0)
    }else{
      setBirdPos((birdPos)=>birdPos-60)
    }
  }
  return (
    <div className="home" onClick={handler}>
    <Link to='/'><button className='buttonBack3'>Back</button></Link>
      <div>Score:{score}</div>
      <div className='background' style={{ height: wall_h, width:wall_w }}>
        {!isStart?<button className='buttonApp3'>Click to start</button>:null}
        <div className='obj' style={{ height: obj_h, width:obj_w, top:0, left:objPos, '--rotate': '180deg' }}/>
        <div className='bird' style={{ height: bird_h, width:bird_w, top:birdPos, left:100 }}></div>
        <div className='obj' style={{ height: bottomObj, width:obj_w, top:wall_h-(obj_h+bottomObj), left:objPos, '--rotate': '0deg' }}/>
      </div>
    </div>
  );
}

export default App3;
