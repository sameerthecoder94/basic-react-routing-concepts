import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (name === '' || email === '') {
      alert('Invalid input provided');
    } else {
      // redirect users to Thank you page.
      navigate('/thank-you');
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={handleNameChange}
            type='text'
            placeholder='Your full name'
          />
        </div>
        <div>
          <input
            value={email}
            onChange={handleEmailChange}
            type='email'
            placeholder='Your email address'
          />
        </div>
        <div>
          <button type='submit'>Sign up to newsletter</button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
