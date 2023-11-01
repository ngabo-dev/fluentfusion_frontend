import React, { useState } from 'react'
import styled from "styled-components"
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";
import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/bigletters"



function Lessons() {
  var i = 1;
  const [image, setImage] = useState(a);
  const [number, setNumber] = useState(1);
  const [key, setKey] =useState('A');
  var newnumber;
  const [lesson1class, setLesson1class ]=  useState(['sidelink-active']);
  const [lesson2class,setLesson2class ] =  useState('sidelink');
  const [lesson3class, setLesson3class ] =  useState('sidelink');
  const [lesson4class, setLesson4class ] =  useState('sidelink');
  const [lesson5class, setLesson5class ] =  useState('sidelink');
  const [lesson6class, setLesson6class ] =  useState('sidelink');
  const [lesson7class, setLesson7class ] =  useState('sidelink');



  const increment =() =>{
    newnumber = number+1
    setNumber(newnumber);
    updateImage(newnumber)
  }

  const deincrement =() =>{
    newnumber = number -1
    setNumber(newnumber);
    updateImage(newnumber)
  }

  const setlesson =(les) =>{
    setNumber(les);
    updateImage(les)
  }

  const updateImage =(newnumber) => {
    switch (newnumber) {
      case 1:
        setImage(a);
        setKey('A');
      break;

      case 2:
        setImage( b);
        setKey('B');
      break;

      case 3:
        setImage( c);
        setKey('C');
      break;

      case 4:
        setImage( d);
        setKey('D');
      break;

      case 5:
        setImage( e);
        setKey('E');
      break;

      case 6:
        setImage( f);
        setKey('F');
      break;

      case 7:
        setImage( g);
        setKey('G');
      break;

      case 8:
        setImage( h);
        setKey('H');
      break;

      case 9:
        setImage(I);
        setKey('I');
      break;

      case 10:
        setImage( j);
        setKey('J');
      break;

      case 11:
        setImage( k);
        setKey('K');
      break;

      case 12:
        setImage( l);
        setKey('L');
      break;

      case 13:
        setImage( m);
        setKey('M');
      break;

      case 14:
        setImage( n);
        setKey('N');
      break;

      case 15:
        setImage( o);
        setKey('O');
      break;

      case 16:
        setImage( p);
        setKey('P');
      break;

      case 17:
        setImage( q);
        setKey('Q');
      break;


      case 18:
        setImage( r);
        setKey('R');
      break;

      case 19:
        setImage(s);
        setKey('S');
      break;

      case 20:
        setImage( t);
        setKey('T');
      break;

      case 21:
        setImage( u);
        setKey('U');
      break;

      case 22:
        setImage( v);
        setKey('V');
      break;

      case 23:
        setImage( w);
        setKey('W');
      break;

      case 24:
        setImage( x);
        setKey('X');
      break;

      case 25:
        setImage( y);
        setKey('Y');
      break;

      case 26:
        setImage( z);
        setKey('Z');
      break;

      case 27:
        setImage( zero );
        setKey('0');
      break;

      case 28:
        setImage( one);
        setKey('1');
      break;

      case 29:
        setImage( two);
        setKey('2');
      break;

      case 30:
        setImage( three);
        setKey('3');
      break;

      case 31:
        setImage( four);
        setKey('4');
      break;

      case 32:
        setImage( five);
        setKey('5');
      break;

      case 33:
        setImage( six);
        setKey('6');
      break;

      case 34:
        setImage( seven);
        setKey('7');
      break;

      case 35:
        setImage( eight);
        setKey('8');
      break;

      case 36:
        setImage( nine);
        setKey('9');
      break;

      default:
      // If the character is not a number, skip it or display an error message
      break;
    }
    if (newnumber < 5){

      setLesson1class('sidelink-active');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');

    }else if  (newnumber < 8){

      setLesson1class('sidelink');
      setLesson2class('sidelink-active');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');

    }else if  (newnumber < 12){

      setLesson1class('sidelink');
      setLesson2class('sidelink');
      setLesson3class('sidelink-active');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');

    }else if  (newnumber < 16){

      setLesson1class('sidelink');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink-active');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink');

    }else if  (newnumber < 21){

      setLesson1class('sidelink');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink-active');
      setLesson6class('sidelink');
      setLesson7class('sidelink');

    }else if  (newnumber < 27) {

      setLesson1class('sidelink');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink-active');
      setLesson7class('sidelink');

    } else {

      setLesson1class('sidelink');
      setLesson2class('sidelink');
      setLesson3class('sidelink');
      setLesson4class('sidelink');
      setLesson5class('sidelink');
      setLesson6class('sidelink');
      setLesson7class('sidelink-active');
    }
  }

  return (
    <Container>
      <div className='flex'>

        <div style={{ borderRight:'gray 2px solid'}} className='sidebar'>
          <h3 style={{textAlign:'center', }}> IBYICIRO </h3>
          <ul>
          <li className={lesson1class} onClick={()=> setlesson(1)}> Icyiciro cya 1 (A - D)</li>
            <li className={lesson2class} onClick={()=> setlesson(5)}> Icyiciro cya 2 (E - G)</li>
            <li className={lesson3class} onClick={()=> setlesson(8)}> Icyiciro cya 3 (H - K)</li>
            <li className={lesson4class} onClick={()=> setlesson(12)}> Icyiciro cya 4 (L - O)</li>
            <li className={lesson5class} onClick={()=> setlesson(16)}> Icyiciro cya 5 (P - T)</li>
            <li className={lesson6class} onClick={()=> setlesson(21)}> Icyiciro cya 6 (U - Z)</li>
            <li className={lesson7class} onClick={()=> setlesson(27)}> Icyiciro cya 7 (0 - 9)</li>
          </ul>

        </div>

        <button onClick={deincrement} className='previous'> Inyuma  </button>

        <div style={{ width: '72%', justifyContent: 'center' }} className='flex mt-32'>
        <span className='letter'> {key} : </span>

        <div>
          <img key={number} src={image} alt="a" className='image' />
        </div>
      </div>

          <button onClick={increment} className='next'> Komeza &#8594;  </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
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
    .previous{
      background-color: #4890fc;
      color: white;
      font-weight: bold;
      height: 38px;
      padding: 12px;
      margin-top: 28%;
      border-radius: 4px;
      margin-left:12px;
    }
    .next{
      background-color: #4890fc;
      color:white;
      font-weight: bold;
      height: 38px;
      padding: 12px;
      margin-top: 28%;
      border-radius: 4px;
    }
    .image{
      margin-left: 24px;
    }
    .letter{
      font-size: 120px;
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
    .previous{
      margin-top: 32px;
    }
    .next{
      margin-top: 32px;
      margin-left:12px;
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
  }
`
export default Lessons
