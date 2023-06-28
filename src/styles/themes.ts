import {StyledTheme} from "./styles.types.ts";

export const lightTheme: StyledTheme = {
    colors: {
        background: '#EFE6E1',
        linkWrapperBackground: 'rgba(0, 0, 0, 0.26)',
        typography: {
            main: '#232121',
            secondary: '#232121',
        }
    }
}

export const darkTheme: StyledTheme = {
    colors: {
        background: '#232121',
        linkWrapperBackground: 'rgba(255, 255, 255, 0.26)',
        typography: {
            main: '#EFE6E1',
            secondary: '#EFE6E1',
        }
    }
}
