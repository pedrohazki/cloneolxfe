// import React from "react";

import styled from "styled-components";

export const Template = styled.div`

`;

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 27px;
  text-align: ${props => props.TextAlign || "left"};
  margin: ${props => props.Margin || "0"};
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  background-color: #FFCACA;
  color: #000000;
  border: 2px solid #FF0000;
  padding: 10px;
`
