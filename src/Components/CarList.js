import React from 'react'
import './CarList.css'
import c1 from '../img/c1.png'
import c2 from '../img/c2.png'
import c3 from '../img/c3.png'
import c4 from '../img/c4.png'
import c5 from '../img/c5.png'
import c6 from '../img/c6.png'
import c7 from '../img/c7.png'
import c8 from '../img/c8.png'
import c9 from '../img/c9.png'

export default function CarList() {

  // car name list
  const carList = ['경차', '준중형', '중형 승용', '대형 승용', '승합차', '수입차', '소중형 RV', '중형 RV', '대형 RV'];
  // imported car img list
  const car_img = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

  // result for print
  let carResult = [];


  const carListfunc = () => {
    for(let i=0; i<carList.length; i++) {
      carResult.push (
            <div id={`c${i+1}`}>
              <img src={car_img[i]} alt={`c${i+1}`} />
              <h3>{carList[i]}</h3>
              <p>렌트 실시간 공개</p>
            </div>
      )
    }
    return carResult;
  }


  return (
    <div id='car_wrapper'>
      <div id='car_text'>
        <p id='car_title'>월렌트 + 12개월 렌트</p>
        <p><span>자차, 정비</span>포함</p>
        <p>주행거리별 마일리지 제도</p>
        <p>마일리지별 국내최저가 월렌트 [가격all오픈]</p>
        <br/>
        <img src='/' alt='blank_text' />
        <br/>
        <button id='car_counsel'>온라인 상담신청</button>
        <div id='car_list_wrapper'>

        {carListfunc()}

        {/* 몇 개 없어서 이렇게 했다가 for문으로 고쳤습니다. */}

          {/* 
          <div class ='car_list' id='car_list1'>
            <div>
              <img src={c1} alt='c1' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c2} alt='c2' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c3} alt='c3' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
          
          </div>
          <div class ='car_list' id='car_list2'>
            <div>
              <img src={c4} alt='c4' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c5} alt='c5' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c6} alt='c6' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>

          </div>
          <div class ='car_list' id='car_list3'>
            <div>
              <img src={c7} alt='c7'/>
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c8} alt='c8' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
            <div>
              <img src={c9} alt='c9' />
              <h3>대형 승용</h3>
              <p>렌트 실시간 공개</p>
            </div>
          </div> 
          */}

        </div>
      </div>
    </div>
  )
}
