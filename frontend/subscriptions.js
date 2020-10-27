import { appWillStart$, configuration, TAB_BAR_PATTERNS_BLACK_LIST } from '@shopgate/engage/core';

export default (subscribe) => {
  subscribe(appWillStart$, () => {
    // Extend a blacklist where tab bar is hidden
    configuration.update(TAB_BAR_PATTERNS_BLACK_LIST, blacklist => [
      '/advent-calendar',
      ...blacklist,
    ]);
  });
};
