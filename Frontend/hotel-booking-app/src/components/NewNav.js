import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import navSvg from '../assets/nav.svg';
import logo from '../assets/logo.svg';

const NewNav = () => {
  return (
    <NewNavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
        </div>
        <img src={navSvg} alt="nav" />
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {/* {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )} */}
        </ul>
      </div>
    </NewNavContainer>
  );
};

const NewNavContainer = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    /* border: 1px solid cyan; */
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 5px solid purple; */
    img {
      width: 9.375rem;
      margin-left: -19.375rem;
      /* border: 1px solid red; */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
    /* border: 1px solid pink; */
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      /* grid-template-columns: auto 1fr auto; */
      align-items: center;
      justify-content: center;
      img {
        align-self: center;
        position: relative;
      }
    }
    .nav-links {
      position: absolute;
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--background);
        font-size: 1.25rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
export default NewNav;
