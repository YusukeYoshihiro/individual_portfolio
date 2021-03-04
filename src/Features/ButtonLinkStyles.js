import styled from 'styled-components';
import { Link } from 'react-router-dom';


// #86c232'
export const ButtonLink = styled(Link)`
  text-decoration: none;
  border-radius: 50px;
  background: ${({ primary }) => ( primary ? '#86c232' : '#222629' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  /* color: ${({dark}) => (dark ? '#222629' : '#222629' )}; */
  color: ${({dark}) => (dark ? '#222629' : '#fff' )}; 
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => ( primary ? '#fff' : '#86c232' )};
  }
`;