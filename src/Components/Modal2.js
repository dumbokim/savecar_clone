import React, { useState } from 'react';
import './Modal2.css';
import modal2 from '../img/modal2.png';

export default function Modal2() {

  const [modalOpen2, setModalOpen2] = useState(true);

  const modalfunc2 = () => {
    return (
      modalOpen2? (
        <div id='modal2_wrapper'>
          <div id='modal2_img_wrapper'>
            <img src={modal2} alt='modal_img' />
          </div>
          <div id='modal2_text'>
            <input type='checkbox' />
            <span>오늘 하루동안 보지 않기</span>
            <button onClick={() => {close2()}}>[닫기]</button>
          </div>
        </div> 
      ) : <div id='modal2_closed'></div>
    )
  }

  const close2 = () => {
      setModalOpen2(false);
      return console.log(modalOpen2);
  } 

  return (
    <div id='modal2_wrap'>
      {modalfunc2()}
    </div>
    
  )
}
