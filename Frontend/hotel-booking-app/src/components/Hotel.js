import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import testImg from '../assets/hero-bcg-2.jpeg';
import { useHotelsContext } from '../context/hotels_context';

const Hotel = ({ image, name, city, rooms, id }) => {
  const { fetchSingleHotel } = useHotelsContext();

  const handleClick = (e) => {
    console.log(id);
    fetchSingleHotel(id);
  };

  return (
    <Wrapper>
      <div className="container">
        <img src={testImg} alt={name} />
        <button onClick={handleClick} className="link">
          <FaSearch />
        </button>
        {/* <Link to={`/hotels/${id}`} className="link">
          <FaSearch />
        </Link> */}
      </div>
      <h5>{name}</h5>
      <p>{city}</p>
      <p>rooms available: {rooms?.filter((room) => room.available).length}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Hotel;
