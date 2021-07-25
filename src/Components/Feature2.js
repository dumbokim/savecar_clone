import React from 'react';
import './Feature2.css';
import feature2 from '../img/feature2_img.png'


export default function Feature2() {
  return (
    <section id='feature2_wrapper'>
      <div id='feature2_title'>
        <h2>캠핑카쉐어링 &amp; 장기렌트</h2>
        <img src='' alt='blank_text' />
        <br/>
        <p>캠핑카를 렌터카회사의 장기렌트 상품으로 구매하고</p>
        <p>고가의 캠핑카의 경제적 가치를 높일 수 있는</p>
        <p>세이브카 캠핑카 장기렌트 &amp; 쉐어링 상품을 소개합니다.</p>
        <br/>
        <img src='' alt='blank_text' />

      </div>
      <div id='feature2_content'>
        <img src={feature2} alt='feature2_img' />
        <button>카페 상품보러가기</button>
      </div>
      
    </section>
  )
}
