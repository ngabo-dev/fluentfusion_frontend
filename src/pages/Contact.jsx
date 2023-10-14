import React from 'react'
import styled from "styled-components"
import ContactDiv from '../components/ContactDiv'

function Contact() {
  return (
    <div>

    <Container>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 0 70%' }}>
          <div style={{width:'92%', paddingLeft:'4%'}}>
            <h3 style={{textDecoration:'underline', width:'100%', textAlign:'center'}} > TWOHEREZE IGITEKEREZO </h3>
            <p style={{fontSize:'18px'}}> Amazina yombi:</p>
            <input type='text' style={{width:'90%', backgroundColor:'#EEEEEE', borderRadius:'4px', height:'32px'}} />
            <p style={{fontSize:'18px'}}> Email:</p>
            <input type='email' style={{width:'90%', backgroundColor:'#EEEEEE', borderRadius:'4px', height:'32px'}} />
            <p style={{fontSize:'18px'}}> Ubutumwa:</p>
            <textarea type='email' style={{width:'90%', backgroundColor:'#EEEEEE', borderRadius:'4px'}} rows={4}></textarea> <br />

            <input type='submit' style={{backgroundColor:'#4890fc', height:'36px', color:'white', borderRadius:'4px', fontWeight:'bold', marginTop:'18px'}} value={'Ohereza'} />


          </div>
        </div>
        <div style={{ flex: '1 0 26%', marginLeft: '12px' }}>
          <ContactDiv />
        </div>
      </div>
    </Container>
    </div>
  )
}

const Container = styled.div`
    margin-top: 20vh;
`
export default Contact
