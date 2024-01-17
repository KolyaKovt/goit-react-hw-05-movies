// import { Link } from "react-router-dom";
import { StyledHeader, StyledList, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledList>
        <li>
          <StyledLink to={"/"}>home</StyledLink>
        </li>
        <li>
          <StyledLink to={"/movies"}>movies</StyledLink>
        </li>
      </StyledList>
    </StyledHeader>
  );
};

export default Header;
