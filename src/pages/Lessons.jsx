import React, { useState } from 'react';
import styled from 'styled-components';
import { a, b, c, d } from '../constants/pngletters'; // Update imports as needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Lessons() {
  const [image, setImage] = useState(a);
  const [number, setNumber] = useState(1);
  const [key, setKey] = useState('A');
  const [lesson1class, setLesson1class] = useState('sidelink-active');
  const [lesson2class, setLesson2class] = useState('sidelink');
  const [lesson3class, setLesson3class] = useState('sidelink');
  const [lesson4class, setLesson4class] = useState('sidelink');
  const [lesson5class, setLesson5class] = useState('sidelink');
  const [lesson6class, setLesson6class] = useState('sidelink');
  const [lesson7class, setLesson7class] = useState('sidelink');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulate user authentication state
  const isAuthenticated = false; // Change to true for testing

  const navigate = useNavigate(); // Initialize useNavigate

  const setlesson = (les) => {
    if (!isAuthenticated && les >= 5) {
      setIsModalOpen(true);
      return;
    }
    console.log("Setting lesson to:", les); // Debugging line
    setNumber(les);
    updateImage(les);
  };

  const updateImage = (newnumber) => {
    switch (newnumber) {
      case 1: setImage(a); setKey('A'); break;
      case 2: setImage(b); setKey('B'); break;
      case 3: setImage(c); setKey('C'); break;
      case 4: setImage(d); setKey('D'); break;
      default: break;
    }

    // Update active lesson styles
    setLesson1class(newnumber < 5 ? 'sidelink-active' : 'sidelink');
    setLesson2class(newnumber >= 5 && newnumber < 8 ? 'sidelink-active' : 'sidelink');
    setLesson3class(newnumber >= 8 && newnumber < 12 ? 'sidelink-active' : 'sidelink');
    setLesson4class(newnumber >= 12 && newnumber < 16 ? 'sidelink-active' : 'sidelink');
    setLesson5class(newnumber >= 16 && newnumber < 21 ? 'sidelink-active' : 'sidelink');
    setLesson6class(newnumber >= 21 && newnumber < 27 ? 'sidelink-active' : 'sidelink');
    setLesson7class(newnumber >= 27 ? 'sidelink-active' : 'sidelink');
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

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
        <ModalOverlay className='h-96 w-96'>
          <ModalContent>
            <button onClick={closeModal} className="close-icon">X</button>
            <h2 className='font-bold text-2xl text-center'>Please sign up</h2>
            <p>You need to sign up to access this lesson.</p>
            <div className='button-group'>
              <button className="login-btn justify-center" onClick={() => navigate('/login')}>LOGIN</button>
              {/* <button className="signup-btn" onClick={handleSignUp}>SIGN UP</button> */}
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20vh;
  .flex {
    display: flex;
  }
  .sidebar {
    width: 20%;
    min-height: 420px;
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
  .image {
    height: 320px;
    margin-left: 24px;
  }
  .letter {
    font-size: 120px;
    color: #20323e;
  }
  .mobile-title {
    display: none;
  }

  @media (max-width: 768px) {
    margin-top: 12vh;
    .flex {
      display: block;
    }
    .sidebar {
      width: 100%;
      min-height: 220px;
      margin-top: 120px;
      display: none;
    }
    .mt-32 {
      margin-top: 4px;
    }
    .previous, .next {
      margin-top: 32px;
      margin-left: 12px;
    }
    .image {
      max-height: 220px;
      margin-left: 12px;
    }
    .letter {
      font-size: 80px;
      margin-bottom: 82px;
      margin-left: 12px;
    }
    .mobile-title {
      display: block;
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
  position: relative;
  height:350px;
  width:350px;


  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #5386e4;
    font-size: 24px;
    cursor: pointer;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .login-btn, .signup-btn {
    background-color: #5386e4;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .signup-btn {
    background-color: #027bce; /* Different color for sign-up button */
  }
`;

export default Lessons;
