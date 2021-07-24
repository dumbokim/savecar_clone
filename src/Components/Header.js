import React, { useEffect } from 'react'
import './Header.css'

export default function Header() {

  useEffect(() => {
    const header = document.getElementById('header_wrapper');
    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 50) {
        header.id='header_wrapper_scroll'
      } else {
        header.id='header_wrapper'
      }
    })
  })
  

  return (
    <div id='header_wrapper'>
      <div id='header_logo'><a href='/'><img src='https://lh3.googleusercontent.com/proxy/Ysh-n6-lI0mUFgFgINooOEvhb2w6Xz6B8c3QfuxbyzFogdBIFmojfGeHVJK6B9uLlmSh_masGcGRm3BprPfxNB1L' alt='header_logo'/></a></div>
      <div id='header_btn'>
        <a href='/'><button id='header_home'>HOME</button></a>
        <a href='/'><button id='header_month_rent'>월렌트+12개월렌트</button></a>
        <a href='/'><button id='header_long_rent'>누구나장기렌트</button></a>
        <a href='/'><button id='header_camping_rent'>캠핑카렌트</button></a>
        <a href='/'><button id='header_share_rent'>캠핑카 장기 &amp; 쉐어링</button></a>
        <a href='/'><button id='header_price_list'>한눈에 보는 세이브카 가격표</button></a>
      </div>
    </div>
  )
}
