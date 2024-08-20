import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ContactDiv from '../components/ContactDiv';

function Contact() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [displayMessage, setDisplayMessage] = useState('Twandikire ubutumwa!');
  const [status, setStatus] = useState('start');

  const handleSave = async (e) => {
    e.preventDefault();

    const data = {
      fullname: nameRef.current.value,
      telephone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch('http://localhost:8000/api/contacts/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setDisplayMessage('Murakoze kuduha ubutumwa bwanyu, tuzabasubiza vuba!');
        setStatus('sent');
        nameRef.current.value = '';
        phoneRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      } else {
        setDisplayMessage('Hari ikibazo cyabaye, mwongere mugerageze.');
      }
    } catch (e) {
      console.error('Error:', e);
      setDisplayMessage('Hari ikibazo cyabaye, mwongere mugerageze.');
    }
  };

  return (
    <div className="px-8">
      <Container>
        <div className="h-96 bg-[url('../src/images/homeimage.jpg')] bg-no-repeat bg-cover">
          <div className="text-center py-20">
            <h2 className="font-bold text-4xl">CONTACT</h2>
            <div className="inline-flex py-8">
              <p className="px-2 mt-2">Home</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
              <p className="px-2 mt-2">contact</p>
            </div>
          </div>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31899.819102314075!2d30.1367296!3d-1.9628031999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1723887950760!5m2!1sen!2srw"
            width="1218"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="grid grid-cols-2">
          <div style={{ flex: '1 0 26%' }} className="m-10">
            <ContactDiv />
          </div>
          <div className="bg-[url('../src/images/contact-bg.png')] bg-no-repeat -translate-y-10" style={{ flex: '1 0 70%' }}>
            <form style={{ width: '82%', paddingLeft: '10%' }} onSubmit={handleSave}>
              <h3 className="text-center py-6" style={{ textDecoration: 'underline', color: '#027bce' }}> OHEREZA IGITEKEREZO </h3>
              <input type="text" className="contact-input mb-2 w-96 placeholder:px-4 py-4" placeholder="Amazina yombi" ref={nameRef} required />
              <input type="phone" className="contact-input mb-2 w-96 placeholder:px-4 py-4" placeholder="Telephone" ref={phoneRef} required />
              <input type="email" className="contact-input w-96 mb-2 placeholder:px-4 py-4" placeholder="Email" ref={emailRef} required />
              <textarea className="contact-text w-96 mb-2 placeholder:px-4 py-4" rows={4} placeholder="Ubutumwa" ref={messageRef} required></textarea> <br />

              <input
                type="submit"
                className="w-96 bg-blue-600"
                style={{ backgroundColor: '#4890fc', height: '36px', color: 'white', borderRadius: '4px', fontWeight: 'bold', border: '1px gray solid', marginTop: '18px' }}
                value="Ohereza"
              />
            </form>
            <br />
            <br />
            <br />
            <br />
            <div style={{ color: status === 'sent' ? 'green' : '#4890fc' }}>{displayMessage}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin-top: 14vh;
  .contact-input {
    width: 90%;
    border-radius: 4px;
    height: 32px;
    border: 1px solid #8d99ae;
  }
  .contact-text {
    width: 90%;
    border-radius: 4px;
    border: 1px solid #8d99ae;
  }

  @media (max-width: 768px) {
    .contact-input {
      width: 100%;
    }
    .contact-text {
      width: 100%;
    }
  }
`;

export default Contact;
