import styled from 'styled-components';
import { Link } from 'react-router-dom';

// #355EB4, '#01BF71
export const ButtonRouter = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => ( primary ? '#01BF71' : '#010606' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  /* color: ${({dark}) => (dark ? '#010606' : '#010606' )}; */
  color: ${({dark}) => (dark ? '#010606' : '#fff' )}; 
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
    background: ${({ primary }) => ( primary ? '#fff' : '#01BF71' )};
  }
`;