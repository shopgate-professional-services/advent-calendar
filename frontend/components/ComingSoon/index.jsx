import React, { Fragment } from 'react';
import { css } from 'glamor';
import { CountdownTimer } from '@shopgate/engage/components';
import { getCountDownSeconds } from '../../helpers';
import { messages } from '../../config';

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
      {messages.calendarTooEarly}
    </p>
    <p className={styles.timer}>
      <CountdownTimer timeout={getCountDownSeconds()} />
    </p>
  </Fragment>
);

export default ComingSoon;
