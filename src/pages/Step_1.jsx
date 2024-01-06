import React, { useRef } from 'react';

export default function Step_1() {
  const boxsRef = useRef(null);

  const handleWheel = (e) => {
    const delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta > 0) {
      // 스크롤 다운
      boxsRef.current.scrollLeft += 50; // 조절 가능한 값
    } else {
      // 스크롤 업
      boxsRef.current.scrollLeft -= 50; // 조절 가능한 값
    }
  };

  return (
    <div>
      <h4 className='t1' style={{color:'#fff', marginTop:'50px', marginLeft:'40vw'}}>누굴까요</h4>
      <div
        className='boxs'
        style={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex' }}
        ref={boxsRef}
        onWheel={handleWheel}
      >
        <div className='boxx-contain' style={{ alignItems: 'center', display: 'flex' }}>
        <div className='boxx' 
        style={{
            marginTop:'2vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FFE352',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>김덕중/더기</div>

        <div className='boxx2' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FFC452',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>신재희/재이</div>


        <div className='boxx3' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FFA800',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>장준서/준</div>

        <div className='boxx4' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FF624D',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>이채린/디유</div>

        <div className='boxx5' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FF3030',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>임성경/네오</div>


        </div>
      </div>
    </div>
  );
}