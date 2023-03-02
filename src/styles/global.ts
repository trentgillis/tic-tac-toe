import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-yellow: #f2b137;
    --color-yellow-hover: #ffc860;
    --color-blue: #31c3bd;
    --color-blue-hover: #65e9e4;
    --color-silver: #a8bfc9;
    --color-silver-hover: #dbe8ed;
    --color-dark-navy: #1a2a33;
    --color-semi-dark-navy: #1f3641;
    --font-weight-bold: 600;
    --font-weight-medium: 500;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    font-family: 'Outfit', sans-serif;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  html {
    background-color: var(--color-dark-navy);
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }
`;
