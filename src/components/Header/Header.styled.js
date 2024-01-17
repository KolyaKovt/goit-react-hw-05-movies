import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid grey;
`;
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const StyledLink = styled(NavLink)`
  text-transform: capitalize;
  font-size: 30px;

  &.active {
    color: red;
  }
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
