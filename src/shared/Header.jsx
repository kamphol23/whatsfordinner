import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  justefy-conten: flex-end;
  align-items: center;
  padding: 30px 10%;
  background-color: rgba(159, 163, 166, 0.1);
`;

const Logo = styled.h2`
  cursor: pionter;
  margin-right: auto;
  cursor: pointer;
`;

const Navlinks = styled.ul`
  list-styled: none;

  & > LInk,
  li {
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
  }
`;

const LogInBtn = styled.button`
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgb(73, 114, 156);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5 ease 0s;
  &:hover {
    background-color: rgba(126, 163, 199, 0.5);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo> What's for dinner </Logo>
      <nav>
        <Navlinks>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Recepie">
            <li>Recepie</li>
          </Link>

          <li>Shop</li>
        </Navlinks>
      </nav>

      <LogInBtn>Log in </LogInBtn>
    </HeaderWrapper>
  );
};

export default Header;
