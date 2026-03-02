import React, { useState } from 'react';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
       
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        
        setMessage('Login successful!');
        setFormData({ email: '', password: '' });
        setTimeout(() => {
         
          window.location.href = 'http://localhost:5174'; 
        }, 1000);
      } else {
        setMessage(data.error || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Cannot connect to the server. Is your backend running?');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        
        
        <div className="left-panel">
          <h2>Welcome Back!</h2>
          <p>
            To keep connected with us please login with your personal info to access your dashboard and manage your watchlist.
          </p>
          
        </div>


      
        <div className="right-panel">
          <h2 className="signup-heading">Signin</h2>
          
          
          {message && (
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '10px', 
              color: message.includes('successful') ? 'green' : 'red' 
            }}>
              {message}
            </div>
          )}

          <form className="signup-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <button type="submit" className="signup-btn">Signin</button>
          </form>

         
        </div>

      </div>
    </div>
  );
};

export default Login;