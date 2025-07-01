// Search.jsx or inside Header.jsx above the Header() function
import React from 'react';

function Search() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <button
        style={{
          padding: '10px 16px',
          marginLeft: '10px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
