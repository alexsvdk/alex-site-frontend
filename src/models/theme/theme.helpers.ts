import {ETheme} from "./theme.types.ts";
import {THEME_CACHE_VALUE} from "./theme.constants.ts";

export const getThemeDefaultValue = (): ETheme => {
    const themeCached = localStorage.getItem(THEME_CACHE_VALUE) as ETheme;
    if (!themeCached) {
        return window?.matchMedia('(prefers-color-scheme: dark)').matches ? ETheme.Dark : ETheme.Light
    }
    return themeCached;
}
