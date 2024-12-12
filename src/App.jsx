import { useState } from 'react'
import './App.css'

function App() {
  let [title, setTitle] = useState(['React 공부일정', 'vite로 프로젝트 생성', 'Vs Code 확장팩 정리']);
  let [like, setLike] = useState([0,0,0])
  let [modal, setModal] = useState(false)
  let [num, setNum] = useState(0)
  let [input, setInput] = useState('')
  return (
    <>
      <div className='black-nav'>
        <h1>React Blog</h1>
      </div>
      <button onClick={() => {
        let copy = [...title]
        copy[0] = '여자코트 추천'
        setTitle(copy);
      }} className='blue_btn'>글 수정</button>
      <button onClick={() => {
        let copy = [...title]
        copy.sort()
        setTitle(copy)
      }} className='pink_btn'>가나다순 정렬</button>

      {
        title.map(function(a, i){
          return(
            <div key={i} onClick={() => {
              setModal(!modal)
              setNum(i)
            }} className='list'>
              <h4>{a} <span onClick={(e) => {
                e.stopPropagation()
                let copy = [...like]
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍</span>{like[i]}</h4>
              <p>2024년 12월 12일 발행</p>
              <button onClick={() => {
                let copy = [...title]
                copy.splice(i, 1)
                setTitle(copy)
              }} className='delete_btn'>삭제</button>
            </div>
          )
        })
      }
    
      {
        modal === true ? <Modal num={num} title={title} /> : null
      }
      <input onChange={(e) => {
        setInput(e.target.value)
      }} type="text" />
      <button onClick={() => {
        let copy = [...title]
        copy.unshift(input)
        setTitle(copy)
      }}>글발행</button>
    </>
  )
}

function Modal (props){
  return(
    <div className='modal'>
      <h4>{props.title[props.num]}</h4>
      <p>날짜</p>
      <p>글내용</p>
    </div>
  )
}

export default App
