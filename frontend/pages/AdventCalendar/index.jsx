import React from 'react';
import { css } from 'glamor';
import { useTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import CloseButton from '../../components/CloseButton';
import Calendar from '../../components/Calendar';
import ComingSoon from '../../components/ComingSoon';
import { isCalendarAllowed } from '../../helpers';
import { calendarPage } from '../../config';
import { CALENDAR_ROUTE } from '../../constants';

const { image } = calendarPage;

const styles = {
  content: css({
    margin: '1.25rem',
    marginTop: 'calc(1.25rem + var(--safe-area-inset-top))',
    position: 'relative',
  }),
  image: css({
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
  }),
};

/**
 * @returns {JSX}
 */
const AdventCalendar = () => {
  const { View } = useTheme();

  const allowCalendar = isCalendarAllowed();

  return (
    <View>
      <div className={styles.content}>
        <CloseButton />

        <div className={styles.image}>
          <img src={image} alt="" />
        </div>

        {allowCalendar && <Calendar />}

        {!allowCalendar && <ComingSoon />}

      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern={CALENDAR_ROUTE}
    component={AdventCalendar}
  />
);
