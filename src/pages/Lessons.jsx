import React, { useState } from 'react'
import styled from "styled-components"
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";
import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/alphabets"



function Lessons() {
  var i = 1;
  const [image, setImage] = useState(a);
  const [number, setNumber] = useState(1);
  const [key, setKey] =useState('A');

  const updateImage =() => {
    setNumber(number+1);
    switch (number) {
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
        setImage( r);
        setKey('R');
      break;

      case 18:
        setImage(s);
        setKey('S');
      break;

      case 19:
        setImage( t);
        setKey('T');
      break;

      case 20:
        setImage( u);
        setKey('U');
      break;

      case 21:
        setImage( v);
        setKey('V');
      break;

      case 22:
        setImage( w);
        setKey('W');
      break;

      case 23:
        setImage( y);
        setKey('Y');
      break;

      case 24:
        setImage( z);
        setKey('Z');
      break;

      case 25:
        setImage( q);
        setKey('Q');
      break;

      case 26:
        setImage( x);
        setKey('X');
      break;

      case 27:
        setImage( zero);
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
            <li style={{textDecoration:'none', marginTop:'26px'}}> Icyiciro cya 1 (A - D)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 2 (E - G)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 3 (H - K)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 4 (L - O)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 5 (P - T)</li>
            <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 6 (U - Z)</li>
          </ul>

        </div>
        <div style={{width:'76%', padding:'4%', display:'flex', float:'center'}}>
         <span style={{fontSize:'120px'}}> {key} : </span>

          <div style={{width:'200px'}}>
            <img className="sign-img" key={number} src={image} alt="a" style={{width:'100%'}}/>
          </div>

        </div>
          <button onClick={updateImage} style={{backgroundColor:'blue', color:'white'}}> Next  </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`
export default Lessons
