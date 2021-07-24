import React from 'react'
import './Apply.css'


export default function Apply() {
  return (
    <section id='apply_wrapper'>

        <div id='apply_title'>
          <p>간편 상담신청</p>
        </div>

        <div id='apply_input'>
          <div id='apply_input1'>
            <label><span>*</span>이름</label>
            <br/>
            <input placeholder='이름을 입력해주세요' />
          </div>
          <div id='apply_input2'>
            <label>연락처</label>
            <br/>
            <input placeholder='연락처를 입력해주세요' />
          </div>
          <br/>
          <div id='apply_input3'>
            <label>차량명</label>
            <br/>
            <input placeholder='차량명을 입력해주세요' />
          </div>
          <div id='apply_input4'>
            <label>지역</label>
            <br/>
            <input placeholder='지역을 입력해주세요' />
          </div>
          <br/>
          <div id='apply_input_bottom'>
            <div id='apply_input5'>
              <label>대여 일자</label>
              <br/>
              <input placeholder='예상 대여일자를 입력해주세요' />
            </div>
            <div id='apply_input6'>
              <label>요청 사항</label>
              <br/>
              <input placeholder='요청사항을 입력해주세요' />
            </div>
          </div>
        </div>

        <div id='apply_btn'>
          <input type='checkbox'/>
          <span>개인정보 수집 및 이용에 동의합니다.</span>
          <br/>
          <button id='apply_btn1'>상담신청</button>

        </div>

    </section>
  )
}
