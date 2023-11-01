import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='the-footer'>
        <div style={{marginTop:'12px'}}>
          Copyright &copy; {currentYear}, all rights reserved. Made by
         <a href='https://iitech.rw/'  target='_blank' style={{ color: 'white', textDecoration:'underline', marginLeft:'4px', fontWeight:'bold', textUnderlineOffset:'5px' }}>IITECH RWANDA</a>


        </div>

    </div>
  )
}

export default Footer
