import React, { useState } from 'react';
import styled from "styled-components";
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";
import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/pngletters";

function Lessons() {
  const [image, setImage] = useState(a);
  const [number, setNumber] = useState(1);
  const [key, setKey] = useState('A');
  const [lesson1class, setLesson1class] = useState(['sidelink-active']);
  const [lesson2class, setLesson2class] = useState('sidelink');
  const [lesson3class, setLesson3class] = useState('sidelink');
  const [lesson4class, setLesson4class] = useState('sidelink');
  const [lesson5class, setLesson5class] = useState('sidelink');
  const [lesson6class, setLesson6class] = useState('sidelink');
  const [lesson7class, setLesson7class] = useState('sidelink');

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Assume this represents user authentication state
  const isAuthenticated = false; // Change to true when the user is signed in

  const setlesson = (les) => {
    if (!isAuthenticated && les >= 5) {
      setIsModalOpen(true); // Open the modal instead of alert
      return;
    }
    setNumber(les);
    updateImage(les);
  };

  const updateImage = (newnumber) => {
    switch (newnumber) {
      case 1: setImage(a); setKey('A'); break;
      case 2: setImage(b); setKey('B'); break;
      case 3: setImage(c); setKey('C'); break;
      case 4: setImage(d); setKey('D'); break;
      // Add further cases as needed
      default: break;
    }

    // Update active lesson styles
    if (newnumber < 5) {
      setLesson1class('sidelink-active');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');
    } else if (newnumber < 8) {
      setLesson1class('sidelink');
      setLesson2class('sidelink-active');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <div className='mobile-title'><h3> AMASOMO</h3></div>
      <div className='flex'>
        <div style={{ borderRight: 'gray 2px solid' }} className='sidebar px-8'>
          <h3 style={{ textAlign: 'center', color: '#027bce', textDecoration: 'underline', textUnderlineOffset: '8px' }}> IBYICIRO </h3>
          <ul>
            <li className={lesson1class} onClick={() => setlesson(1)}> Icyiciro cya 1 (A - D)</li>
            <li className={lesson2class} onClick={() => setlesson(5)}> Icyiciro cya 2 (E - G)</li>
            <li className={lesson3class} onClick={() => setlesson(8)}> Icyiciro cya 3 (H - K)</li>
            <li className={lesson4class} onClick={() => setlesson(12)}> Icyiciro cya 4 (L - O)</li>
            <li className={lesson5class} onClick={() => setlesson(16)}> Icyiciro cya 5 (P - T)</li>
            <li className={lesson6class} onClick={() => setlesson(21)}> Icyiciro cya 6 (U - Z)</li>
            <li className={lesson7class} onClick={() => setlesson(27)}> Icyiciro cya 7 (0 - 9)</li>
          </ul>
        </div>
        
        <button onClick={() => setlesson(number - 1)} className='previous'> Inyuma </button>

        <div style={{ width: '72%', justifyContent: 'center' }} className='flex mt-32'>
          <span className='letter'>{key} :</span>
          <div>
            <img key={number} src={image} alt="a" className='image' />
          </div>
        </div>

        <button onClick={() => setlesson(number + 1)} className='next'> Komeza &#8594;</button>
      </div>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-blue-500 border-blue-500 text-center  mx-20 w-20 h-20">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
</svg>

            <h2 className='font-bold text-2xl text-center'>Please sign up</h2>
            <p>You need to sign up to access this lesson.</p>
            <div className='grid grid-cols-2 gap-4'>
            <button onClick={closeModal} className="close-btn">Close</button>
            <button  className="p-3.5 text-center close-btn text-white">sign Up</button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

const Container = styled.div`
    margin-top: 20vh;
    .flex{
      display:flex;
    }
    .sidebar{
      width:20%;
      min-height:420px;
    }
    .mt-32 {
      margin-top: 32px;
    }
    .previous, .next {
      background-color: #5386e4;
      border: 1px gray;
      color: white;
      font-weight: bold;
      height: 38px;
      padding: 12px;
      margin-top: 28%;
      border-radius: 4px;
      cursor: pointer;
    }
    .image{
      height: 320px;
      margin-left: 24px;
    }
    .letter{
      font-size: 120px;
      color: #20323e;
    }
    .mobile-title{
      display:none;
    }

  @media (max-width: 768px) {
    margin-top: 12vh;
    .flex{
      display:block;
    }
    .sidebar{
      width:100%;
      min-height:220px;
      margin-top:120px;
      display: none;
    }
    .mt-32 {
      margin-top: 4px;
    }
    .previous, .next {
      margin-top: 32px;
      margin-left: 12px;
    }
    .image{
      max-height: 220px;
      margin-left:12px;
    }
    .letter{
      font-size: 80px;
      margin-bottom:82px;
      margin-left:12px;
    }
    .mobile-title{
      display:block;
      margin-top: 112px;
      text-align: center;
      text-decoration: underline;
      text-underline-offset: 6px;
    }
  }
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }

  .close-btn {
    background-color: #5386e4;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;

export default Lessons;
