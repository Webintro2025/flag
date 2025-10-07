import GetInTouch from '@/components/GetInTouch'
import Maps from '@/components/Maps'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      {/* Contact Us Heading Banner */}
      <div style={{
        background: '#FCC870',
        padding: '2rem 0',
        textAlign: 'center',
      }}>
        <h1 style={{
          color: '#222',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
        }}>
          Contact Us
        </h1>
      </div>
      <GetInTouch/>
      <Maps/>
    </>
  )
}

export default ContactPage