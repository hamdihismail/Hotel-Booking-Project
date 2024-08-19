import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

function Login() {
  const handleSubmit = (e) => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    console.log(`username is ${username.value}`);
    console.log(`password is ${password.value}`);

    console.log('You clicked submit :' + e.target.type);
  };

  return (
    <Wrapper className="page-100">
      <div className="container section-center">
        <form className="section-center" onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="username"
            />
          </div>
          <div className="input-container">
            <label for="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              className="password"
            />
          </div>
          <input type="submit" className="btn primary" onClick={handleSubmit} />
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
