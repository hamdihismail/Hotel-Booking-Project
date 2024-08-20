import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

function Login() {
  const { loginUser } = useUserContext();
  const navigate = useNavigate();

  // State to store the form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pass the username and password to the loginUser function
    await loginUser(formData.username, formData.password);
    navigate('/hotels');
  };

  return (
    <Wrapper className="page-100">
      <div className="container section-center">
        <form className="section-center" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="btn primary" value="Login" />
          <Link to="/register">
            <p className="register-link">
              Not registered? Click here to sign-up.
            </p>
          </Link>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px solid var(--accent-);
    border-radius: var(--radius);
    padding: 1rem;
    width: max-content;
  }
  .input-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    width: 100%;
  }
  .username,
  .password {
    padding: 0.5rem;
    background: var(--clr-grey-2);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .btn {
    border-radius: var(--radius);
  }
  .register-link {
    color: var(--sec2);
  }
`;

export default Login;
