import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: rgba(159, 163, 166, 0.1);
  display: felx;
  padding: 30px 10%;
  justefy-conten: center;
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  text-align: center;
  & > div {
    padding: 0px 20px;
    margin: auto;

    a:link {
      text-decoration: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <h4> Kontakter</h4>
        <p> +46 ** ** ** **</p>
        <p> kakaka@hotcoco.kaka </p>
      </div>
      <div>
        {" "}
        <h4>Media</h4>
        <p> Facebook</p>
        <p> Instagram </p>
        <p> Twitter </p>
      </div>
      <div>
        <h4>
          {" "}
          Om oss
          <p>
            {" "}
            <a href="#"> Sätt en länk är sen </a>
          </p>
        </h4>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
