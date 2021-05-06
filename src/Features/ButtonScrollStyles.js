import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid  var(--color-green);
  border-radius: 50px;
  margin-bottom: 15px;
  background: ${({ primary }) => ( primary ?'var(--color-green)' : 'var(--color-dark)' )};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff' )}; 
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 15px;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => ( primary ? '#fff' :'var(--color-green)' )};
    color: ${({dark}) => (dark ? 'var(--color-dark)' : '#fff' )}; 
  }
`;
