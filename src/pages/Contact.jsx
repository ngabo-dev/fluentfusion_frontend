import React from 'react'
import styled from "styled-components"
import ContactDiv from '../components/ContactDiv'

function Contact() {
  return (
    <div>

    <Container>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 0 70%' }}>
          Contact us now
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
