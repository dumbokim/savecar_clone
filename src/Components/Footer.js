import React from 'react';
import './Footer.css';
import address from '../img/address.png';
import callus from '../img/callus.png';
import email from '../img/email.png';


export default function Footer() {
  return (
    <section id='footer_wrapper'>
      <div id='footer_head'>
        <div class='footer_head_content' id='address'>
          <img src={address} alt='address' />
          <h2>ADDRESS</h2>
          <p>서울시 송파구 충민로 66 가든파이브라이프</p>
          <p>F-8026 [장지역, 복정역]</p>
        </div>
        <div class='footer_head_content' id='callus'>
          <img src={callus} alt='callus' /> 
          <h2>CALL US</h2>
          <p>1661-3331</p>
        </div>
        <div class='footer_head_content' id='email'>
          <img src={email} alt='email' />
          <h2>E-MAIL</h2>
          <p>itscar@naver.com</p>
        </div>

      </div>
      <div id='footer_text'>
        <i class="fas fa-circle"></i>
        <p>(주)세이브카 | 대표자 : 양성희</p>
        <p>서울시 송파구 충민로 66 가든파이브라이프 F-8026</p>
        <p>사업자등록번호 : 113-86-62612 | TEL : 1661-3331</p>
        <br/>
        <p>통신판매: 제2020-서울송파-2913호</p>
        <p>Copyright SavecarAndCarZ. All Rights Reserved.</p>
        <br/>
        <p>(주)카즈 | 대표자 : 송영수</p>
        <p>서울 성동구 자동차시장1길 70 C동 가열 308호</p>
        <p>사업자등록번호 : 555-86-01842 | TEL : 1544-4680</p>


      </div>
      
    </section>
  )
}
