import React from 'react'

function ContactDiv() {
  return (
    <div style={{width:'96%',height:'100%',paddingRight:'18px', marginBottom:'56px'}}>
    <h3 style={{ textDecoration:'underline', color:'#027bce'}}>
        MENYA AMARENGA
      </h3>
      <p style={{textAlign:'justify', fontFamily: "'Lato', sans-serif", color:'#555555'}}>
       MENYA AMARENGA n'urubuga rwigisha ururimi rw'amarenga ntakiguzi, mu rwego rwo guteza imbere ababana n'ubumuga bwo kutumva.
      </p>

    <h4 style={{ textDecoration:'underline', color:'#027bce'}}>
      CONTACT INFO
    </h4>

    <b style={{color:'#3e6680'}}> Email:</b> <br/>
    <a href='mailto:info@iitech.rw' style={{ textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'>
      info@iitech.rw  </a> <br /><br />

    <b style={{color:'#3e6680'}}> Twitter:</b> <br/>
    <a href='https://twitter.com/IITECH_RWANDA/' style={{textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'> @IITECH_RWANDA </a> <br /><br />


    <b style={{color:'#3e6680'}}> Website:</b> <br/>
    <a href='https://www.iitech.rw/' style={{ textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'>www.iitech.rw </a>
    </div>
  )
}

export default ContactDiv
