import React from 'react'

function ContactDiv() {
  return (
    <div style={{width:'96%',height:'100%', paddingLeft:'18px', paddingRight:'18px', borderLeft:'black 2px solid', marginBottom:'56px'}}>
    <h3 style={{ textDecoration:'underline', color:'#027bce'}}>
        MENYA AMARENGA
      </h3>
      <p style={{textAlign:'justify', fontFamily: "'Lato', sans-serif", color:'#444'}}>
       MENYA AMARENGA n'urubuga rwigisha ururimi rw'amarenga ntakiguzi, mu rwego rwo guteza imbere ababana n'ubumuga bwo kutumva.
      </p>

    <h4 style={{ textDecoration:'underline', color:'#027bce'}}>
      DUHAMAGARE
    </h4>

    <b style={{color:'#3e6680'}}> Email:</b> <br/>
    <a href='mailto:info@iitech.rw' style={{ textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'>
      info@iitech.rw  </a> <br /><br />

    <b style={{color:'#3e6680'}}> Telephone:</b> <br/>
    <a href='https://wa.me/250788737639' style={{textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'> +(250) 788 737 639 </a> <br /><br />


    <b style={{color:'#3e6680'}}> Website:</b> <br/>
    <a href='https://www.iitech.rw/' style={{ textDecoration:'none', fontFamily: "'Lato', sans-serif", color:'#444'}} target='_blank'>www.iitech.rw </a>
    </div>
  )
}

export default ContactDiv
