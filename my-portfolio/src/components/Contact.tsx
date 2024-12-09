import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} required type="email" />
        </label>
        <label>
          Message
          <textarea value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default Contact
