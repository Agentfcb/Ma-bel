import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${isRegister ? 'Регистрация' : 'Вход'} выполнен!\nEmail: ${email}`);
  };

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto',
        background: '#fff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          {isRegister ? 'Регистрация' : 'Вход'}
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d4c9b8',
                borderRadius: '8px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d4c9b8',
                borderRadius: '8px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button 
            type="submit" 
            className="hero-btn"
            style={{ 
              width: '100%', 
              marginBottom: '20px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', color: '#7a7a7a' }}>
          {isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: 'none',
              border: 'none',
              color: '#4a76a8',
              cursor: 'pointer',
              marginLeft: '5px',
              fontWeight: '600'
            }}
          >
            {isRegister ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;