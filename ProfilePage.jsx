import React from 'react'


const ProfilePage = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Profile Page</h1>

      <div className='Profile-head'>
        
        <div className='profile-img'> 
            <img src="https://t4.ftcdn.net/jpg/07/24/94/05/240_F_724940537_uOuvYU0zzfTatPvahOeyGJFaEpobqOV7.jpg" alt="user-img"></img>
        </div>
        <div className='profile-body'>
            <p>
                <strong>Name:</strong>
            </p>
            <p>
                <strong>Email:</strong>
            </p>
            <p>
                <strong>Address:</strong>
            </p>
            <div className="profile-buttons">
            <button>Change Details</button>
            <button>Log Out</button>
          </div>
        </div>
       
      </div>
     
    

    </div>

  )
}

export default ProfilePage

/*import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
 
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    //  API call to fetch user data
    const fetchUserData = async () => {
      
      setTimeout(() => {
        const data = {
          name: 'abc',
          email: 'abc.ink@example.com',
          address: '456 Tattoo Lane, Ink City',
        };
        setUserData(data);
      }, 1000); 
    };

    fetchUserData();
  }, []); 

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Profile Page</h1>

      <div className='Profile-head'>
        <div className='profile-img'>
          <img
            src="https://t4.ftcdn.net/jpg/07/24/94/05/240_F_724940537_uOuvYU0zzfTatPvahOeyGJFaEpobqOV7.jpg"
            alt="user-img"
          />
        </div>
        <div className='profile-body'>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <div className="profile-buttons">
            <button>Change Details</button>
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;*/

