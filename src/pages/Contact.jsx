import React, {useRef, useState} from 'react'
import styled from "styled-components"
import ContactDiv from '../components/ContactDiv'
import {firestore} from "../constants/firebase";
import {addDoc, collection } from "@firebase/firestore"

function Contact() {

  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const emailRef = useRef();
  const ref = collection(firestore, "message");
  const [displayMessage, setDisplayMessage] =useState('Twandikire ubutumwa!')
  const [status, setStatus] =useState('start')

  const hundleSave = async (e) =>{
    e.preventDefault();

    let data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }
    try{
      addDoc(ref, data);
      setDisplayMessage('Murakoze kuduha ubutumwa bwanyu, tuzabasubiza vuba!')
      setStatus('sent');
      nameRef.current.value = '';
      phoneRef.current.value ='';
      emailRef.current.value ='';
      messageRef.current.value ='';

    } catch(e){
      console.log(e);
    }

  }
  return (
    <div>

    <Container>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 0 70%' }}>
          <form style={{width:'92%', paddingLeft:'4%', color:'#444'}} onSubmit={hundleSave}>
            <h3 style={{textDecoration:'underline', width:'100%', textAlign:'center', color:'#027bce'}} > OHEREZA IGITEKEREZO </h3>
            <p style={{fontSize:'18px', marginBottom:'2px', color:'#295573'}}> Amazina yombi:</p>
            <input type='text' style={{width:'90%', backgroundColor:'', borderRadius:'4px', height:'32px', border:'1px solid #8d99ae'}} ref={nameRef} required/>
            <p style={{fontSize:'18px', marginBottom:'2px', color:'#295573'}}> Telephone:</p>
            <input type='phone' style={{width:'90%', backgroundColor:'', borderRadius:'4px', height:'32px', border:'1px solid #8d99ae'}} ref={phoneRef} required/>
            <p style={{fontSize:'18px', marginBottom:'2px', color:'#295573'}}> Email:</p>
            <input type='email' style={{width:'90%', backgroundColor:'', borderRadius:'4px', height:'32px', border:'1px solid #8d99ae'}} ref={emailRef} required/>

            <p style={{fontSize:'18px', marginBottom:'2px', color:'#295573'}}> Ubutumwa:</p>
            <textarea type='email' style={{width:'90%', backgroundColor:'', borderRadius:'4px', border:'1px solid #8d99ae'}} rows={5} ref={messageRef} required></textarea> <br />

            {status =='sent' ? (
            <div style={{color:'green'}}>{displayMessage}</div>
            ) :(
              <div style={{color:'#4890fc'}}>{displayMessage}</div>
            ) }


            <input type='submit' style={{backgroundColor:'#4890fc', height:'36px', color:'white', borderRadius:'4px', fontWeight:'bold', marginTop:'18px'}} value={'Ohereza'} />
            <br />
            <br />
            <br />
            <br />


          </form>
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
    margin-top: 14vh;
`
export default Contact
