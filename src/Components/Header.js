import React, { useState, useEffect } from 'react'
import './Header.css'
import savecar_logo from '../img/savecar_logo.png'

export default function Header() {
  
  useEffect(() => {

    let header = document.getElementById('header_wrapper');

    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 50) {
        header?.setAttribute('id', 'header_wrapper_scroll')
      } else {
        header?.setAttribute('id', 'header_wrapper')
      }
    })

  })

  const [menuStatus, setmenuStatus] = useState(false)

  const menuClick = () => {
    menuStatus? setmenuStatus(false) : setmenuStatus(true);
  }

  const menuOpen = () => {
    return (
    <ul id='nav_bar'>
      <li>HOME</li>
      <li>월렌트+12개월렌트</li>
      <li>누구나장기렌트</li>
      <li>캠핑카렌트</li>
      <li>캠핑카 장기 &amp; 쉐어링</li>
      <li>한눈에 보는 세이브카 가격표</li>
    </ul>
    )
  }
  
  

  return (
    <div id='header_wrapper'>
      <div id='nav_btn'>
        <ul id='nav_bar_wrapper'>
          {menuStatus? <li id='menu_btn' onClick={() => {menuClick()}}>MENU<button>X</button></li> : <li onClick={() => {menuClick()}}>MENU</li>}
          {menuStatus? menuOpen(): null}
        </ul>
      </div>
      <div id='header_logo'><a href='/'><img src={savecar_logo} alt='header_logo'/></a></div>
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
