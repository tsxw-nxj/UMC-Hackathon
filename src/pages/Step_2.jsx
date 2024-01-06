import React, { useRef } from 'react';

export default function Step_2() {
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
      <h4 className='t1' style={{color:'#fff', marginTop:'50px', marginLeft:'37vw'}}>질문 던지기</h4>
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
            justifyContent: 'center'}}>당신의 MBTI는?</div>

        <div className='boxx2' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FFC452',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>좋아하는 음식은?</div>


        <div className='boxx3' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FFA800',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>좋아하는 계절은?</div>

        <div className='boxx4' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FF624D',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>좋아하는 동물은?</div>

        <div className='boxx5' 
        style={{
            marginTop:'10vh',
            width:'90vw',height:'60vh',
            backgroundColor:'#FF3030',borderRadius:'25px',
            color:'#fff',fontSize:'30px',textAlign:'center',              display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>엄마 vs 아빠</div>


        </div>
      </div>
    </div>
  );
}