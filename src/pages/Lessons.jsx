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
      console.log(number);
  }

  return (
    <Container>
      <div style={{display:'flex'}}>

        <div style={{width:'20%', borderRight:'gray 2px solid', minHeight:'420px'}} >
          <h3 style={{textAlign:'center', }}> IBYICIRO </h3>
          <ul>
            <li style={{textDecoration:'none', marginTop:'26px'}} onClick={()=> setlesson(1)}> Icyiciro cya 1 (A - D)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(5)}> Icyiciro cya 2 (E - G)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(8)}> Icyiciro cya 3 (H - K)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(12)}> Icyiciro cya 4 (L - O)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(16)}> Icyiciro cya 5 (P - T)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(21)}> Icyiciro cya 6 (U - Z)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}} onClick={()=> setlesson(27)}> Icyiciro cya 7 (0 - 9)</li>
          </ul>

        </div>

        <button onClick={deincrement} style={{backgroundColor:'#4890fc', color:'white', fontWeight:'bold', height:'38px', padding:'12px', marginTop:'12%', borderRadius:'4px', marginLeft:'12px'}}> Previous  </button>

        <div style={{ width: '72%', display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontSize: '120px' }}> {key} : </span>

        <div>
          <img key={number} src={image} alt="a" style={{marginLeft:'24px'}}/>
        </div>
      </div>

          <button onClick={increment} style={{backgroundColor:'#4890fc', color:'white', fontWeight:'bold', height:'38px', padding:'12px', marginTop:'12%', borderRadius:'4px'}}> Next  </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`
export default Lessons
