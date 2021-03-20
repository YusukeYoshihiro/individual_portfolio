import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  text-decoration: none;
  border-radius: 50px;
  background: ${({ primary }) => ( primary ?'var(--color-green)' : 'var(--color-dark)' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  /* color: ${({dark}) => (dark ? 'var(--color-dark)' : 'var(--color-dark)' )}; */
  color: ${({dark}) => (dark ? 'var(--color-dark)' : '#fff' )}; 
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display:block;
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => ( primary ? '#fff' :'var(--color-green)' )};
  }
`;