import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  bottom: 0;
  background-color: #100217e6;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  flex-direction: ${({ mobile }) => {
    return mobile ? "column" : "row";
  }};
  text-align: center;
`;

const Option = styled.footer`
  color: white;
  margin: 1rem;
  margin-right: 2rem;
`;

const Footer = ({ mobile }) => {
  return (
    <Foot mobile={mobile}>
      <Option>Ayuda</Option>
      <Option>Contacto</Option>
      <Option>Terminos y condiciones</Option>
      <Option>Politicas de privacidad</Option>
    </Foot>
  );
};

export default Footer;