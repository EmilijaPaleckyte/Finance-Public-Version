import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #222260;
    --primary-color-light: rgba(34, 34, 96, 0.6);
    --primary-color-lighter: rgba(34, 34, 96, 0.4);
    --color-green: #42ad00;
    --color-grey: #aaa;
    --color-accent: #f56692;
    --color-delete: #ff0000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(0.8rem, 1.5vw, 1.2rem); 
    color: var(--primary-color-light);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  .error {
    color: red;
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25%, 75% {
      transform: translateX(10px);
    }
    50% {
      transform: translateX(-10px);
    }
  }

  /* Responsive Styles */
  /* Smartphones */
  @media (max-width: 576px) {
    body {
      font-size: clamp(0.8rem, 1.2vw, 1rem);
    }
  }

  /* Tablets */
  @media (min-width: 577px) and (max-width: 992px) {
    body {
      font-size: clamp(0.9rem, 1.2vw, 1.1rem); 
    }
  }

  /* Laptops and Desktops */
  @media (min-width: 993px) {
    body {
      font-size: 1rem; 
    }
  }

  /* High-Resolution Displays */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    /* Styles for high-resolution displays */
  }

  /* Orientation */
  @media (orientation: landscape) {
    /* Styles for landscape orientation */
  }

  @media (orientation: portrait) {
    /* Styles for portrait orientation */
  }
`;
