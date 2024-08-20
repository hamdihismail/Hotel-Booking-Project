import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { links } from '../utils/constants';
import { useUserContext } from '../context/user_context';

function Register() {
  const { registerUser } = useUserContext();
  const navigate = useNavigate();

  // State to store the form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pass the username and password to the registerUser function
    await registerUser(
      formData.username,
      formData.email,
      formData.role,
      formData.password
    );
    navigate('/hotels');
  };
  return (
    <Wrapper className="page-100">
      <div className="container section-center">
        <form className="section-center" onSubmit={handleSubmit}>
          <div className="input-container">
            <label for="username">Username</label>
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
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label for="role">Role [USER,ADMIN,HOTEL]</label>
            <input
              type="role"
              name="role"
              id="role"
              className="role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="btn primary" />
          <Link to="/login">
            <p className="register-link">
              Already registered? Click here to login.
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
    background-color: var(--light-shadow);
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
  .password,
  .email,
  .role {
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
export default Register;
