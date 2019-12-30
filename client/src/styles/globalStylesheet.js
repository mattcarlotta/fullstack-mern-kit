import { createGlobalStyle } from "styled-components";
import PoppinsLight from "./assets/fonts/Poppins-Light.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Light';
    font-style: normal;
    font-weight: normal;
    src: url(${PoppinsLight}) format('truetype');
  }
  #root, #app, html {
    height: 100%;
    width: 100%;
  }
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: "Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    min-height: 100vh;
    background-color: #282828;
  }
  @-webkit-keyframes drop {
    10% {
        opacity: 0.5;
    }
    20% {
        opacity: 1;
        top: 3.78em;
        -webkit-transform: rotateX(-360deg);
                transform: rotateX(-360deg);
    }
    80% {
        opacity: 1;
        top: 3.78em;
        -webkit-transform: rotateX(-360deg);
                transform: rotateX(-360deg);
    }
    90% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
        top: 6.94em
    }
  }
  @keyframes drop {
      10% {
          opacity: 0.5;
      }
      20% {
          opacity: 1;
          top: 3.78em;
          -webkit-transform: rotateX(-360deg);
                  transform: rotateX(-360deg);
      }
      80% {
          opacity: 1;
          top: 3.78em;
          -webkit-transform: rotateX(-360deg);
                  transform: rotateX(-360deg);
      }
      90% {
          opacity: 0.5;
      }
      100% {
          opacity: 0;
          top: 6.94em
      }
  }
  @-webkit-keyframes wave {
    0% {
      left: -60%;
    }
    100% {
      left: 125%;
    }
  }
  @keyframes wave {
    0% {
      left: -60%;
    }
    100% {
      left: 125%;
    }
  }
  @-webkit-keyframes pulse {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #eee;
    }
  }
  @keyframes pulse {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #eee;
    }
  }
  @-webkit-keyframes pop {
    0% {
      top: 6px;
      height: 46px;
    }
    50%, 100% {
      top: 19px;
      height: 21px;
    }
  }
  @keyframes pop {
    0% {
      top: 6px;
      height: 46px;
    }
    50%, 100% {
      top: 19px;
      height: 21px;
    }
  }
  @-webkit-keyframes delay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.05);
    }
    20% {
      -webkit-transform: scaleY(1.0);
    }
  }
  @keyframes delay {
    0%, 40%, 100% {
      transform: scaleY(0.05);
      -webkit-transform: scaleY(0.05);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;

export default GlobalStyle;
