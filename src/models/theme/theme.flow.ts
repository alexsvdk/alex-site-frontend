import {sample} from "effector";
import {$theme, updateTheme} from "./theme.store.ts";
import {THEME_CACHE_VALUE} from "./theme.constants.ts";

sample({
    clock: updateTheme,
    fn: (theme) => {
        localStorage.setItem(THEME_CACHE_VALUE, theme);
        return theme;
    },
    target: $theme,
})
