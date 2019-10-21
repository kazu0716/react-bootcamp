import React, { useState } from 'react'
import './styles.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
  }

  const content = submitted ? (
    <p>
      Thanks for joining in! <br />
      When we're ready to wow you, <br />
      You'll get an email.
    </p>
  ) : (
      <form onSubmit={handleSubmit}>
        <p>
          A social network, <br />
          Where you are the customer. <br />
          Ad free. Launching soon.
      </p>
        <label>
          Name:{' '}
          <input value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Email:{' '}
          <input value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <button type="submit">
          I'll vouch for that
      </button>
      </form>
    )

  return <div className="App">{content}</div>
}

export default App