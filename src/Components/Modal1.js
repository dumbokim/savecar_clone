import React, { useState } from 'react';
import './Modal1.css';
import modal1 from '../img/modal1.png';

export default function Modal1() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalfunc = () => {
    return (
      modalOpen? (
        <div id='modal1_wrapper'>
          <div id='modal1_img_wrapper'>
            <img src={modal1} alt='modal_img' />
          </div>
          <div id='modal1_text'>
            <input type='checkbox' />
            <span>오늘 하루동안 보지 않기</span>
            <button onClick={() => {close()}}>[닫기]</button>
          </div>
        </div> 
      ) : null
    )
  }

  const close = (e) => {
    setModalOpen(false);
  } 

  return (
    <div id='modal1_wrap'>
      {modalfunc()}
    </div>
    
  )
}
