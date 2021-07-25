import React from 'react';
import './CampingCar.css'
import europe from '../img/europe.jpeg';
import limou from '../img/limou.jpeg';
import travel from '../img/travel.jpeg';


export default function CampingCar() {
  return (
    <section id='camping_wrapper'>
      <div id='camping_title'> 
        <h1>캠핑카 렌트</h1>
        <p>CAMPERSAVE Motorhome</p>

      </div>
      <div id='camping_list'>
        <div id='europe'>
          <h2>Europe VIP CAMPER</h2>
          <img src={europe} alt='europe' />
          <button>상담 신청</button>
        </div>
        <div id='limou'>
          <h2>Limousine VIP CAMPER</h2>
          <img src={limou} alt='limou' />
          <button>상담 신청</button>

        </div>
        <div id='travel'>
          <h2>Travel VIP CAMPER</h2>
          <img src={travel} alt='travel' />
          <button>장기 대여중</button>

        </div>
      </div>
      
    </section>
  )
}
