
import React from 'react'
import INTBLOG from './../assets/Images/download.jpg'

function IntroPost() {
  return (
    <div style={{
        display: 'flex',
        gap: '-1000px'
    }}>
        <div style={{
            width: '700px',
            height: '100px',
            justifyContent: 'center',
        }}>
            <img src={INTBLOG} ></img>
        </div>
        <div>
            <h1 style={{ fontSize: '28px', fontWeight: '600' }}>Wonders of AI</h1>
            From smart assistants to self-learning robots, AI is transforming the world faster than ever. 
            Lets explore how this incredible technology is reshaping our lives.
        </div>
    </div>
  )
}

export default IntroPost