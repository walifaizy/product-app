import { createGlobalStyle, withTheme } from 'styled-components';

const media = {
    mobile: '480px',
    tablet: '766px',
    desktop: '992px',
    midScreen: '1200px',
    largeScreen: '1400px',
};
export const device = {
    mobile: `(min-width: ${media.mobile})`,
    tablet: `(min-width: ${media.tablet})`,
    desktop: `(min-width: ${media.desktop})`,
    midScreen: `(min-width: ${media.midScreen})`,
    largeScreen: `(min-width: ${media.largeScreen})`,
};

export const themeLight = {
    meta: {
        name: 'light',
        sidebar: 'compact',
    },
    colors: {
        blue: '#2196f3',
        border: '#eaeaea',
        inputBorder: '#d1d1d1',
        primary_background: '#f9f9fc',
        secondary_background: '#fff',
        primary: '#FFFFFF',
        primary_text: '#000428',
        switcher: '#374151',
    },
    boxShadow: {
        componentShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
        overlayShadow: '0 0 50px 0 rgba(82,63,105,.15)',
    },
    fontSize: {
        mobileBase: '11px',
        tabletBase: '12px',
        desktopBase: '13px',
        largeScreenBase: '15px',
    },
};

export const themeNight = {
    meta: {
        name: 'night',
        sidebar: 'compact',
    },
    colors: {
        blue: '#42e3f5',
        border: '#353f48',
        inputBorder: '#bbbbbb',
        primary_background: '#1f2c38',
        secondary_background: '#131d26',
        primary: '#FFFFFF',
        primary_text: '#fafafa',
        switcher: '#E5E7EB',
    },
    boxShadow: {
        componentShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
        overlayShadow: '0 0 50px 0 rgba(82,63,105,.15)',
    },
    fontSize: {
        mobileBase: '11px',
        tabletBase: '12px',
        desktopBase: '13px',
        largeScreenBase: '15px',
    },
};

const GlobalStyles = createGlobalStyle`html,
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color:${(props) => props.theme.colors.primary_background};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Proxima Nova, Helvetica Neue, Arial, sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme.colors.primary_text} 
    -webkit-font-smoothing: antialiased;
}
*:focus {
    outline: none;
}
`;

export default withTheme(GlobalStyles);
