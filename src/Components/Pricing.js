import React from 'react';
import './Pricing.css';

export default function Pricing() {

  const contentList = ['월렌트', '12개월 렌트', '단기 렌트', '캠핑']
  let contentResult = [];

  const content = () => {

    for(let i=0; i<contentList.length; i++) {
      contentResult.push (
        <div class='content_body' id={`content${i+1}`}>
          <div class={`content${i+1}`}>
            <i class="fas fa-money-check-alt"></i>
            <p>한눈에 보는</p>
            <p>{contentList[i]} 가격표</p>
          </div>
          <div class='button_div'>
            <button class={`content${i+1}`}>가격 보기</button>
          </div>
        </div>
      )
    }
    return contentResult;
  }

  return (
    <section id='pricing_wrapper'>
      <div id='pricing_title'>
        <h1>한눈에 보는</h1>
        <h1>세이브카 가격표</h1>
        <img src='' alt='blank_text' />
        <p>사이트 가격 오픈 !!</p>
      </div>
      <div id='pricing_content'>
        {content()}
      </div>
    </section>
  )
}
