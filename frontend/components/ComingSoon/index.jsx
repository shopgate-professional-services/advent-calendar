import React, { Fragment } from 'react';
import { css } from 'glamor';
import { CountdownTimer } from '@shopgate/engage/components';
import { getCountDownSeconds } from '../../helpers';

export const styles = {
  p: css({
    textAlign: 'center',
  }),
  timer: css({
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '2rem',
  }),
};

/**
 * @returns {JSX}
 */
const ComingSoon = () => (
  <Fragment>
    <p className={styles.p}>
      {'Too early message. Come back later in'}
    </p>
    <p className={styles.timer}>
      <CountdownTimer timeout={getCountDownSeconds()} />
    </p>
  </Fragment>
);

export default ComingSoon;
