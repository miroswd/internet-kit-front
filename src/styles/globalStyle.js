import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.BrainhubCarouselItem {
  align-items: flex-start;
}
ul .BrainhubCarousel__track .BrainhubCarousel__track--transition {
  transform: translateX(0);
  
}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
    box-shadow: none;
    -webkit-tap-highlight-color: transparent; /**Remove o box azul quando clica em algo*/
  }
  .hide-scroll {
    overflow-y:hidden;
  }
  body {
    /* @media (max-width:400px) {
      margin:0 10px;
    } */
    min-height:100vh;
    touch-action:manipulation;
    position:relative;
    background: #15171A;
    color:#111;
    -webkit-font-smoothing:antialiased;
    overflow-y:scroll;
    ::-webkit-scrollbar{
     width:10px;
}
    ::-webkit-scrollbar-track {
     box-shadow:inset 0 0 3px rgba(0,0,0,0.2)
    }
    ::-webkit-scrollbar-thumb {
      background:#F8932250;
      height:10px;
    }
    /* Remove as setinhas do input numérico */
        /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    -webkit-overflow-scrolling: touch; /* deixa a rolagem suave */
  }
  .container {
      display:flex;
      flex-direction:column;
      position:relative;
      min-height:100vh;
    }

  body, input, button {
    font-family: 'Comforter Brush', cursive;
    font-family: 'Amatic SC', cursive;
    font-family: 'Outfit', sans-serif;
    font-size:16px;
    font-weight:400;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight:600;
  }
  button {
    cursor: pointer;
    background: 0;
    border:0;
    user-select: none;
  }
  a {
    text-decoration:none;
  }
  /*** iPhone and iOS Form Input Zoom Fixes ***/
/* Fix Input Zoom on devices older than iPhone 5: */
@media screen and (device-aspect-ratio: 2/3) {
    select, textarea, input[type="text"], input[type="password"],
    input[type="datetime"], input[type="datetime-local"],
    input[type="date"], input[type="month"], input[type="time"],
    input[type="week"], input[type="number"], input[type="email"],
    input[type="url"]{ font-size: 16px; }
}
/* Fix Input Zoom on iPhone 5, 5C, 5S, iPod Touch 5g */
@media screen and (device-aspect-ratio: 40/71) {
    select, textarea, input[type="text"], input[type="password"],
    input[type="datetime"], input[type="datetime-local"],
    input[type="date"], input[type="month"], input[type="time"],
    input[type="week"], input[type="number"], input[type="email"],
    input[type="url"]{ font-size: 16px; }
}
/* Fix Input Zoom on iPhone 6, iPhone 6s, iPhone 7  */
@media screen and (device-aspect-ratio: 375/667) {
    select, textarea, input[type="text"], input[type="password"],
    input[type="datetime"], input[type="datetime-local"],
    input[type="date"], input[type="month"], input[type="time"],
    input[type="week"], input[type="number"], input[type="email"],
    input[type="tel"], input[type="url"]{ font-size: 16px; }
}
/* Fix Input Zoom on iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8, iPhone X, XS, XS Max  */
@media screen and (device-aspect-ratio: 9/16) {
    select, textarea, input[type="text"], input[type="password"],
    input[type="datetime"], input[type="datetime-local"],
    input[type="date"], input[type="month"], input[type="time"],
    input[type="week"], input[type="number"], input[type="email"],
    input[type="tel"], input[type="url"]{ font-size: 16px; }
}
`;