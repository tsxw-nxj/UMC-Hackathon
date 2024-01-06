import React from 'react';
import { dummy } from '../profileDummy';
import Card from '../components/Card';
import "../jun.css";
import Upper from '../components/Upper';
export default function Room() {
  const { profile } = dummy;

  // profile을 2줄로 나누기
  const rows = [];
  for (let i = 0; i < profile.length; i += 2) {
    rows.push(profile.slice(i, i + 2));
  }

  return (

    <div className='step-container' style={{ padding: '10vh 10px 15vh 10px' }}>
      <Upper/>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* 각 행을 div로 감싸서 블록 요소로 만듦 */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* 각 Card를 div로 감싸서 블록 요소로 만듦 */}
            {row.map((user, index) => (
              <div key={index}>
                <Card
                  title={user.title}
                  mbti={user.mbti}
                  age={user.age}
                  hobby={user.hobby}
                  name={user.name}
                  photo={user.photo}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

