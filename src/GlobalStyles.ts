import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #286EFA;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #0d6efd;
    --secondary: #6c757d;
    --success: #198754;
    --info: #0dcaf0;
    --warning: #ffc107;
    --danger: #dc3545;
    --font-family: 'Roboto', sans-serif;
    --body-color: #333333;
    }

    * {
        box-sizing: border-box;
    }
    
    body {
        font-size: 1rem;
        font-weight: 400;
        color: var(--body-color);
        line-height: 1.5;
        font-family: var(--font-family);
        margin: 0;
        padding: 0;
        background-color: var(--white);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    .h1, h1,
    .h2, h2 {
        margin-top: 0;
    }

    .h1, h1 {
        font-size: calc(1.375rem + 1.5vw);

      @media (min-width: 1200px) {
        font-size: 2.5rem;
      }
    }

    .h2, h2 {
        font-size: calc(1.325rem + .9vw);

      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    .h3, h3 {
        font-size: calc(1.3rem + .6vw);

        @media (min-width: 1200px) {
            font-size: 1.75rem;
        }
    }
`;
