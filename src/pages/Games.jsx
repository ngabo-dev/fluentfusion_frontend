import React, { useState } from "react";
import styled from "styled-components";
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";
import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/bigletters"
import ask from "../assets/logos/ask.png"

function Games() {
  var i = 1;
  const [image, setImage] = useState(ask);
  const [number, setNumber] = useState(0);
  const [key, setKey] = useState("?");
  var newnumber;
  const [lesson1class, setLesson1class] = useState(["sidelink-active"]);
  const [lesson2class, setLesson2class] = useState("sidelink");
  const [lesson3class, setLesson3class] = useState("sidelink");
  const [lesson4class, setLesson4class] = useState("sidelink");
  const [lesson5class, setLesson5class] = useState("sidelink");
  const [lesson6class, setLesson6class] = useState("sidelink");
  const [lesson7class, setLesson7class] = useState("sidelink");


  const [image1, setImage1] = useState(ask);
  const [image2, setImage2] = useState(ask);
  const [image3, setImage3] = useState(ask);
  const [image4, setImage4] = useState(ask);

  const [radio, setRadio] = useState(0);
  const [errortext, setErrortext] = useState("Kanda hasi utangira imyitozo!");
  const [correctstatus, setCorrectstatus] = useState('not-correct');
  const [correctPosition, setcorrectPosition] = useState(-1);



  const increment = () => {
    if ( radio != correctPosition+1){
      setCorrectstatus('not-correct')
      setErrortext("Igisubizo mwahisomo ntabwo aricyo, ongera ugerageze!");
      return 0;

    }else{
      setErrortext("Igisubizo mwagikoze!");
      setCorrectstatus('correct')

    }
    newnumber = number + 1;
    setNumber(newnumber);
    updateNavigators(newnumber);
    const letters = [ a, b, c, d, e, f, g, h, I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,one, two, three, four, five, six, seven, eight, nine, zero ];
    const randomLetters = [];

    const min = 0;
    const max = 3;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setcorrectPosition(randomNum)
    // console.log(randomNum)

    let i = 0;
    while ( i < 4) {
      if (randomNum == i){
        randomLetters.push(letters[newnumber-1]);
        console.log(letters[newnumber-1])
        i++;

      }else {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if(newnumber-1 !=randomIndex){
          randomLetters.push(letters[randomIndex]);
        i++
        }
      }

    }

    console.log(randomLetters)
    setImage1(randomLetters[0]);
    setImage2(randomLetters[1]);
    setImage3(randomLetters[2]);
    setImage4(randomLetters[3]);

  };


  const setlesson = (les) => {
    setNumber(les);
    updateNavigators(les);
  };


  const handleRadioChange=(num)=> {
    setRadio(num);
    console.log(num);
  }
  const updateNavigators = (newnumber) => {

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

    if (newnumber < 5) {
      setLesson1class("sidelink-active");
      setLesson2class("sidelink");
      setLesson3class("sidelink");
      setLesson4class("sidelink");
      setLesson5class("sidelink");
      setLesson6class("sidelink");
      setLesson7class("sidelink");
    } else if (newnumber < 8) {
      setLesson1class("sidelink");
      setLesson2class("sidelink-active");
      setLesson3class("sidelink");
      setLesson4class("sidelink");
      setLesson5class("sidelink");
      setLesson6class("sidelink");
      setLesson7class("sidelink");
    } else if (newnumber < 12) {
      setLesson1class("sidelink");
      setLesson2class("sidelink");
      setLesson3class("sidelink-active");
      setLesson4class("sidelink");
      setLesson5class("sidelink");
      setLesson6class("sidelink");
      setLesson7class("sidelink");
    } else if (newnumber < 16) {
      setLesson1class("sidelink");
      setLesson2class("sidelink");
      setLesson3class("sidelink");
      setLesson4class("sidelink-active");
      setLesson5class("sidelink");
      setLesson6class("sidelink");
      setLesson7class("sidelink");
    } else if (newnumber < 21) {
      setLesson1class("sidelink");
      setLesson2class("sidelink");
      setLesson3class("sidelink");
      setLesson4class("sidelink");
      setLesson5class("sidelink-active");
      setLesson6class("sidelink");
      setLesson7class("sidelink");
    } else if (newnumber < 27) {
      setLesson1class("sidelink");
      setLesson2class("sidelink");
      setLesson3class("sidelink");
      setLesson4class("sidelink");
      setLesson5class("sidelink");
      setLesson6class("sidelink-active");
      setLesson7class("sidelink");
    } else {
      setLesson1class("sidelink");
      setLesson2class("sidelink");
      setLesson3class("sidelink");
      setLesson4class("sidelink");
      setLesson5class("sidelink");
      setLesson6class("sidelink");
      setLesson7class("sidelink-active");
    }
  };

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            borderRight: "gray 2px solid",
            minHeight: "420px",
          }}
        >
          <h3 style={{ textAlign: "center" }}> IMYITOZO </h3>
          <ul>
            <li className={lesson1class} onClick={() => setlesson(1)}>
              {" "}
              Icyiciro cya 1 (A - D)
            </li>
            <li className={lesson2class} onClick={() => setlesson(5)}>
              {" "}
              Icyiciro cya 2 (E - G)
            </li>
            <li className={lesson3class} onClick={() => setlesson(8)}>
              {" "}
              Icyiciro cya 3 (H - K)
            </li>
            <li className={lesson4class} onClick={() => setlesson(12)}>
              {" "}
              Icyiciro cya 4 (L - O)
            </li>
            <li className={lesson5class} onClick={() => setlesson(16)}>
              {" "}
              Icyiciro cya 5 (P - T)
            </li>
            <li className={lesson6class} onClick={() => setlesson(21)}>
              {" "}
              Icyiciro cya 6 (U - Z)
            </li>
            <li className={lesson7class} onClick={() => setlesson(27)}>
              {" "}
              Icyiciro cya 7 (0 - 9)
            </li>
          </ul>
        </div>

          {/* main div */}
        <div style={{ width: "72%", paddingLeft:'32px'}}>
          <div style={{textAlign:'center', textDecoration:'underline', textUnderlineOffset:'6px'}}><h3> HITAMO</h3></div>

          <div style={{display:'flex'}}>

            {/* left side of the box */}
            <div style={{width:'50%'}}>
              <p>{number}. Hitamo ikiganza gisobanuye inyuguti ya <b>{key} </b> ?</p>
              <span
                style={{
                  fontSize: "120px",
                  justifyContent: "center",
                  padding: "32%",
                }}
              >
                {key}
              </span>
              <div style={{fontStyle:'italic'}}>
              <span className={correctstatus}><b>NB:</b> {errortext} </span>
            </div>
            </div>
            {/* end of left side  */}

            {/* right side of the box for images */}
            <div style={{width:'50%'}}>
            <div style={{ marginLeft: "8%", width:'50%' }}>
              <div style={{ display: "flex" }}>
                <div>
                  <input type="radio" name="answer"  value={1}  onClick={() => handleRadioChange(1)} />
                  <img
                    key={number}
                    src={image1}
                    alt="a"
                    style={{ marginLeft: "8px", height: "100px" }}
                  />
                </div>
                <div style={{ marginLeft: "42px" }}>
                  <input type="radio" name="answer" value={2}  onClick={() => handleRadioChange(2)}  />
                  <img
                    key={number}
                    src={image2}
                    alt="a"
                    style={{ marginLeft: "8px", height: "100px" }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "52px", display: "flex" }}>
                <div>
                  <input type="radio" name="answer"  value={3}   onClick={() => handleRadioChange(3)}/>
                  <img
                    src={image3}
                    alt="a"
                    style={{ marginLeft: "8px", height: "100px" }}
                  />
                </div>
                <div style={{ marginLeft: "42px" }}>
                  <input type="radio" name="answer"   value={4}  onClick={() => handleRadioChange(4)} />
                  <img
                    src={image4}
                    alt="a"
                    style={{ marginLeft: "8px", height: "100px" }}
                  />
                </div>
              </div>
            </div>
            </div>
            {/* end right side of the box */}



          </div>



          {/* footer for navigation buttons */}
          <div style={{ marginTop:'12px', display:'flex' }}>
            <button
              onClick={increment}
              style={{
                backgroundColor: "#4890fc",
                color: "white",
                fontWeight: "bold",
                height: "38px",
                padding: "12px",
                marginTop: "12px",
                borderRadius: "4px",
                margin:'auto',
                float:'right'

              }}
            >
              {" "}
              {number == 0 ? ('Tangira Imyitozo'):('Subiza') }{" "}
            </button>
          </div>
        </div>
      </div>

    </Container>
  );
}

const Container = styled.div`
  margin-top: 20vh;
`;
export default Games;
