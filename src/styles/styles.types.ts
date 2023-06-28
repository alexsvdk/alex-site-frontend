type Color = `rgb(${string})` | `rgba(${string})` | `#${string}`;

export interface StyledTheme {
    colors: {
        background: Color;
        linkWrapperBackground: Color
        typography: {
            main: Color;
            secondary: Color;
        }
    };
}
