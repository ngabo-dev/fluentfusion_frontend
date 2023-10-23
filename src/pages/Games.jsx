import React from 'react'
import styled from "styled-components"

function Games() {
  return (
    <div>

    <Container>
    <div style={{display:'flex'}}>

    <div style={{width:'20%', borderRight:'gray 2px solid', minHeight:'420px'}} >
      <h3 style={{textAlign:'center', }}> IMYITOZO </h3>
      <ul>
        <li style={{textDecoration:'none', marginTop:'26px'}}> Icyiciro cya 1 (A - D)</li>
        <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 2 (E - G)</li>
        <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 3 (H - K)</li>
        <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 4 (L - O)</li>
        <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 5 (P - T)</li>
        <li style={{textDecoration:'none', marginTop:'18px'}}> Icyiciro cya 6 (U - Z)</li>
      </ul>

    </div>
    <div>
      akajkja
    </div>
    </div>
    </Container>
    </div>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`
export default Games
