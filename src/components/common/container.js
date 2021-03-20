import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70rem) {
    width: 100%;
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
`;

export const Holder = styled.div`
  width: 50%;
  padding: 2rem;
  @media (max-width: 70rem){
    width: 100%;
    padding: 0;
  }
`;
