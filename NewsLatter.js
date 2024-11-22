import React, { useState } from 'react';

const NewsLatter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setShowError(true);
      return;
    }

    setIsClicked(true);
    setIsSubscribed(true);
    setShowError(false);

    setTimeout(() => {
      setIsClicked(false);
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div
      style={{
        background: 'white', // Changed to white
        height: '250px', // Adjusted for better layout
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black', // Text color changed to black
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <h1
          className="heading1"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '48px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            marginRight: '150px',
          }}
        >
          <span style={{ color: '#f8133c', fontSize: '60px' }}>Subscribe</span> to <br />
          Our Newsletter
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Please Enter your email"
          style={{
            height: '40px',
            width: '350px',
            padding: '5px',
            borderRadius: '10px',
            fontSize: '16px',
            borderColor: '#f8133c', // Optional border color for input
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Button */}
      <button
        className="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSubscribe}
        style={{
          height: '50px',
          width: '150px',
          borderRadius: '8px',
          borderColor: isClicked ? 'transparent' : isHovered ? 'black' : 'transparent',
          borderStyle: 'solid',
          color: 'white',
          backgroundColor: '#f8133c', // Button color
          cursor: 'pointer',
          fontFamily: 'Courier New, monospace',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
      >
        Subscribe
      </button>

      {/* Error or Success Message */}
      {showError && (
        <div
          style={{
            marginTop: '20px',
            color: 'black', // Changed text color to black for error message
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.2em',
          }}
        >
          Please fill in your email to subscribe.
        </div>
      )}

      {isSubscribed && (
        <div
          style={{
            marginTop: '20px',
            color: 'black', // Changed text color to black for success message
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.2em',
          }}
        >
          Successfully subscribed!
        </div>
      )}
    </div>
  );
};

export default NewsLatter;
