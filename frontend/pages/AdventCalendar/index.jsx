import React from 'react';
import { css } from 'glamor';
import { useTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import CloseButton from '../../components/CloseButton';
import Calendar from '../../components/Calendar';
import Snowfall from '../../components/Snowfall';
import ComingSoon from '../../components/ComingSoon';
import { isCalendarAllowed } from '../../helpers';
import { calendarPage } from '../../config';

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

  return (
    <View>
      <div className={styles.content}>
        <CloseButton />
        <Snowfall />

        <div className={styles.image}>
          <img src={image} alt="" />
        </div>

        {isCalendarAllowed() && (
          <Calendar />
        )}

        {!isCalendarAllowed() && (
          <ComingSoon />
        )}

      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern="/advent-calendar"
    component={AdventCalendar}
  />
);
