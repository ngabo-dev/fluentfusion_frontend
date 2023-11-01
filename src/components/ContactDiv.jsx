import React from 'react'

function ContactDiv() {
  return (
    <div style={{width:'96%',height:'100%', paddingLeft:'18px', paddingRight:'18px', borderLeft:'black 2px solid', marginBottom:'56px'}}>
    <h3 style={{ textDecoration:'underline'}}>
        TWIGE URURIMI RW'AMARENGA
      </h3>
      <p style={{textAlign:'justify'}}>
       TWIGE AMARENGA n'urubuga mugezwaho na IITECH RWANDA rwigisha ururimi rw'amarenga kubuntu, muguteza imbere ababana n'ubumuga bwo kutumva.
      </p>

    <h4 style={{ textDecoration:'underline'}}>
      DUHAMAGARE
    </h4>

    <b> Telephone:</b> <br/>
    <a href='https://wa.me/250788737639' style={{color:'black', textDecoration:'none'}} target='_blank'> +(250) 788 737 639 </a> <br /><br />

    <b> Email:</b> <br/>
    <a href='mailto:info@iitech.rw' style={{color:'black', textDecoration:'none'}} target='_blank'>
      info@iitech.rw  </a> <br /><br />


    <b> Website:</b> <br/>
    <a href='https://www.iitech.rw/' style={{color:'black', textDecoration:'none'}} target='_blank'>www.iitech.rw </a>
    </div>
  )
}

export default ContactDiv
