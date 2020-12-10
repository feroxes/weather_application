import { createGlobalStyle } from 'styled-components';
//Fonts
import SFProDisplayLight from '../fonts/SFPro/SFProDisplay-Light.ttf';
import SFProDisplayRegular from '../fonts/SFPro/SFProDisplay-Regular.ttf';
import SFProDisplayMedium from '../fonts/SFPro/SFProDisplay-Medium.ttf';
import SFProDisplayBold from '../fonts/SFPro/SFProDisplay-Bold.ttf';
import PFDinTextProXThin from '../fonts/PFDPro/PFDinTextPro-XThin.ttf';
import PFDinTextProThin from '../fonts/PFDPro/PFDinTextPro-Thin.ttf';
import PFDinTextProRegular from '../fonts/PFDPro/PFDinTextPro-Regular.ttf';
import PFDinTextProMedium from '../fonts/PFDPro/PFDinTextPro-Medium.ttf';
import PFDinTextProBold from '../fonts/PFDPro/PFDinTextPro-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  //CSS RESET
  * {
    box-sizing: border-box;
    font-family: PFDinTextPro, sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    cursor: pointer;
  }

  //FONTS
  @font-face {
    font-family: SanFrancisco Pro;
    font-style: normal;
    font-weight: 300;
    src: url(${SFProDisplayLight}) format("truetype");
  }

  @font-face {
    font-family: SanFrancisco Pro;
    font-style: normal;
    font-weight: 400;
    src: url(${SFProDisplayRegular}) format("truetype");
  }

  @font-face {
    font-family: SanFrancisco Pro;
    font-style: normal;
    font-weight: 700;
    src: url(${SFProDisplayMedium}) format("truetype");
  }

  @font-face {
    font-family: SanFrancisco Pro;
    font-style: normal;
    font-weight: 900;
    src: url(${SFProDisplayBold}) format("truetype");
  }

  @font-face {
    font-family: PFDinTextPro;
    font-style: normal;
    font-weight: 200;
    src: url(${PFDinTextProXThin}) format("truetype");
  }

  @font-face {
    font-family: PFDinTextPro;
    font-style: normal;
    font-weight: 300;
    src: url(${PFDinTextProThin}) format("truetype");
  }

  @font-face {
    font-family: PFDinTextPro;
    font-style: normal;
    font-weight: 400;
    src: url(${PFDinTextProRegular}) format("truetype");
  }

  @font-face {
    font-family: PFDinTextPro;
    font-style: normal;
    font-weight: 700;
    src: url(${PFDinTextProMedium}) format("truetype");
  }

  @font-face {
    font-family: PFDinTextPro;
    font-style: normal;
    font-weight: 900;
    src: url(${PFDinTextProBold}) format("truetype");
  }


`;

export default GlobalStyle;
