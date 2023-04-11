import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.backgroundColor};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
`;
