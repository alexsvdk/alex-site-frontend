import {themeDomain} from "../models.domains.ts";
import {ETheme} from "./theme.types.ts";
import {getThemeDefaultValue} from "./theme.helpers.ts";

export const $theme = themeDomain.createStore<ETheme>(getThemeDefaultValue());

export const updateTheme = themeDomain.createEvent<ETheme>();

$theme.on(updateTheme, theme => theme);

// window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
