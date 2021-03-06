import styled from "styled-components";
import {Navbar} from "react-bootstrap";

export const FooterStyled = styled(Navbar) `
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  width:101%;
  height: 43px;
  text-align: center;
  color: #F5F0F0 !important;
  line-height: 28px;
  letter-spacing: 0.1em;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: -300px;
  left: -19px;
`