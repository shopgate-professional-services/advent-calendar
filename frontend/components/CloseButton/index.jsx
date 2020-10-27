import React from 'react';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { useNavigation } from '@shopgate/engage/core';
import { AppBarAndroid, CrossIcon } from '@shopgate/engage/components';

const styles = {
  button: css({
    position: 'absolute',
    top: 0,
    left: 0,
    ' button': {
      alignItems: 'center',
      width: 45,
      height: 45,
      borderRadius: 100,
      background: `${themeConfig.colors.light} !important`,
      color: '#000 !important',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  }).toString(),
};

/**
 * @returns {JSX}
 */
const CloseButton = () => {
  const { pop } = useNavigation();

  return (
    <div className={styles.button}>
      <AppBarAndroid.Icon
        onClick={pop}
        icon={CrossIcon}
      />
    </div>
  );
};

export default CloseButton;
