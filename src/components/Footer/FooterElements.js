import styled from 'styled-components';
import { Link } from 'react-router-dom';

// #86c232
// var(--color-dark)
export const FooterContainer = styled.footer`
  margin-top: -1px;
  background-color: var(--color-white);
`;

export const FooterWrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthorName = styled(Link)`
  color: var(--color-green);
  justify-self: start;
  cursor: pointer;
  text-shadow: 0px 3px 0px #b2a98f,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: var(--color-dark);
  margin-bottom: 16px;
`;
