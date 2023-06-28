import 'styled-components';
import {StyledTheme} from "../../styles/styles.types.ts";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledTheme {}
}
