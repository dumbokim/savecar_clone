import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <div id='welcome_wrapper'>
      <div id='welcome_main'>
        <p>WELCOME TO SAVE-CAR</p>
        <p id='welcome_p2'>세이브카 사이트 가격오픈</p>
        <i class="fas fa-circle"></i>
        <p>다양한 차량 제공 및 고객의 안전을 최우선으로 한 정비</p>
        <p>그리고 더욱 더 저렴한 렌트료 제공으로 고객의 만족을 위한 세이브카가 되겠습니다.</p>
        <button id='welcome_btn1'>1661-3331</button>
        <button id='welcome_btn2'>간단 문자보내기</button>
      </div>
    </div>
  )
}
