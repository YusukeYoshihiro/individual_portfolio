import styled from 'styled-components';

// #86c232
// #86c232
// var(--color-dark)
export const Button = styled.button`
  border-radius: 50px;
  margin-bottom: 15px;
  background: ${({ primary }) => ( primary ? '#86c232' : 'var(--color-dark)' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff' )}; 
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
    color: ${({dark}) => (dark ? 'var(--color-dark)' : '#fff' )}; 
  }
`;
