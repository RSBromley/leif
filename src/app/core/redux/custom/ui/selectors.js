import { createSelector } from 'reselect';

export const selectIsSearchOpen = state => state.getIn(['ui', 'showSearch']);
export const selectIsMenuOpen = state => state.getIn(['ui', 'showMenu']);
export const selectIsBasketOpen = state => state.getIn(['ui', 'showBasket']);

export const selectDeviceType = state => state.getIn(['ui', 'device']);
export const selectScreenSize = state => state.getIn(['ui', 'screenSize']);

export const selectHasDropdownFiltersSelected = state =>
  state.getIn(['ui', 'hasDropdownFiltersSelected']);

export const makeSelectDeviceType = () => {
  return createSelector(
    [selectScreenSize],
    screenSize => {
      if (screenSize <= '480') {
        return 'mobile';
      } else if (screenSize > '480' && screenSize <= '769') {
        return 'tablet';
      } else if (screenSize > '768' && screenSize <= '1025') {
        return 'laptop';
      } else if (screenSize > '1024') {
        return 'desktop';
      }
    }
  );
};
