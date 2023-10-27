import React, { useState } from 'react';
import styled from "styled-components";
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";
import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/bigletters";

function Lessons() {
  const [image, setImage] = useState(a);
  const [number, setNumber] = useState(1);
  const [key, setKey] = useState('A');
  const [lessonClasses, setLessonClasses] = useState([
    'sidelink-active', 'sidelink', 'sidelink', 'sidelink', 'sidelink', 'sidelink', 'sidelink'
  ]);

  const increment = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    updateImage(newNumber);
  }

  const deincrement = () => {
    const newNumber = number - 1;
    setNumber(newNumber);
    updateImage(newNumber);
  }

  const setlesson = (les) => {
    setNumber(les);
    updateImage(les);
  }

  const updateImage = (newNumber) => {
    const images = [
      a, b, c, d, e, f, g, h, I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
      zero, one, two, three, four, five, six, seven, eight, nine
    ];

    setImage(images[newNumber - 1]);
    setKey(String.fromCharCode(64 + newNumber));

    const lessonClassesCopy = [...lessonClasses];
    lessonClassesCopy.fill('sidelink');
    lessonClassesCopy[newNumber - 1] = 'sidelink-active';
    setLessonClasses(lessonClassesCopy);
  }

  return (
    <Container>
      <div className="lessons-container">
        <div className="sidebar">
          <h3>IBYICIRO</h3>
          <ul>
            {lessonClasses.map((className, index) => (
              <li key={index} className={className} onClick={() => setlesson(index + 1)}>
                Icyiciro cya {index + 1} ({String.fromCharCode(64 + index + 1)})
              </li>
            ))}
          </ul>
        </div>

        <button onClick={deincrement}>Previous</button>

        <div className="lesson-content">
          <div className="lesson-details">
            <span>{key} :</span>
            <img src={image} alt="lesson" />
          </div>

          <button onClick={increment}>Next</button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20vh;

  .lessons-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .sidebar {
      flex: 1;

      h3 {
        text-align: center;
      }

      ul {
        padding: 0;
        list-style: none;
      }
    }

    .lesson-content {
      flex: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      .lesson-details {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  button {
    background-color: #4890fc;
    color: white;
    font-weight: bold;
    height: 38px;
    padding: 12px;
    margin: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media (min-width: 768px) {
      margin: 30% 10px 0;
    }
  }
`;

export default Lessons;
