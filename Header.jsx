import React from 'react';
import blogg from './../assets/Images/blogg.png';

function Header() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* 🖼️ Centered Banner Image */}
      <div style={{ marginBottom: '40px' }}>
        <img
          src={blogg}
          alt="Blog Logo"
          style={{
            width: '150px',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      {/* 📄 Navigation + Button */}
      <div style={{ marginTop: '40px' }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            listStyleType: 'none',
            gap: '40px',
            fontSize: '18px',
            padding: 0,
            marginBottom: '20px',
          }}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Header;
