import React, { useState, useEffect } from 'react';
import { messageData } from '../../firebase/firebase';
import './Admin.css';

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect( () => {
     messageData.once('value', (snap) => {
      const obiectMesaj = snap.val();
      const arrayMesaj = [];
      for (let id in obiectMesaj) {
        arrayMesaj.push({ id, ...obiectMesaj[id] });
      }
      setMessages(arrayMesaj);

    });
  }, []);

  console.log(messages);

  return (
    <div className='contactMesaj'>
      <h1 className='h1'>Contact Mesaj</h1>
 
        <div>
        {messages && messages.map((message) =>  (
          <div className='mesaj'>
            <hr />
            <p className='p'>Nume: {message.name}</p>
            <p className='p'>Email: {message.email}</p>
            <p className='p'>Telefon: {message.phone}</p>
            <p className='p'>Mesaj: {message.message}</p>
            <hr />
          </div>
        ))
        }
        </div>
  
    </div>
  );
};

export default Admin;
