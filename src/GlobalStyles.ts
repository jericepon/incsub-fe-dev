import { createGlobalStyle } from 'styled-components'

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
    }
    
    body {
        font-size: 1rem;
        font-weight: 400;
        color: var(--gray-dark);
        line-height: 1.5;
        font-family: var(--font-family);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--white);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    .h1, h1 {
        font-size: calc(1.375rem + 1.5vw);
    }

`