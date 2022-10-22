import {createGlobalStyle} from "styled-components";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: FreeSansBold;
        src: url("/fonts/free-sans-bold.otf") format("opentype");
    }
    @font-face {
        font-family: FreeSans;
        src: url("/fonts/free-sans-regular.otf") format("opentype");
    }
`;
