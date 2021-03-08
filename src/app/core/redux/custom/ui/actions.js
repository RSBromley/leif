import { action } from '../../../util/helpers';
import { TOGGLE_SEARCH, TOGGLE_MENU, BROWSER_RESIZE } from './types';

export const toggleSearch = value => action(TOGGLE_SEARCH, { value });
export const toggleMenu = value => action(TOGGLE_MENU, { value });
export const browserResize = value => action(BROWSER_RESIZE, { value });
