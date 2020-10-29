import React, {
  Fragment, useCallback, useEffect, useState,
} from 'react';
import { ToastProvider, UIEvents } from '@shopgate/engage/core';
import { Grid } from '@shopgate/engage/components';
import ActiveDayCell from './components/ActiveDayCell';
import ExpiredDayCell from './components/ExpiredDayCell';
import FutureDayCell from './components/FutureDayCell';
import RewardSheet from '../RewardSheet';
import Snowfall from '../Snowfall';
import {
  getCalendarDay, getCalendarDays, isDayExpired, isFutureDay,
} from '../../helpers';
import { messages, calendarGrid } from '../../config';
import { styles } from './styles';

const { fallingSnow } = calendarGrid;

/**
 * @returns {JSX}
 */
const Calendar = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [showSheet, setShowSheet] = useState(false);

  const activateDay = useCallback((day) => {
    if (isFutureDay(day)) {
      UIEvents.emit(ToastProvider.ADD, {
        id: 'advent.calendar',
        message: messages.dayInFuture || 'modal.body_error',
      });
    } else if (!getCalendarDay(day)) {
      UIEvents.emit(ToastProvider.ADD, {
        id: 'advent.calendar',
        message: messages.dayNotFound || 'modal.body_error',
      });
    } else {
      setActiveDay(day);
    }
  }, []);

  useEffect(() => {
    let t;
    if (activeDay) {
      t = setTimeout(() => setShowSheet(true), 500);
    }
    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, [activeDay]);

  useEffect(() => {
    if (!showSheet) {
      setActiveDay(null);
    }
  }, [showSheet]);

  const content = getCalendarDay(activeDay);

  return (
    <Fragment>
      <div className={styles.gridWrapper}>
        {fallingSnow && <Snowfall />}

        <Grid className={styles.grid}>
          {getCalendarDays().map((day) => {
            if (isDayExpired(day)) {
              return (
                <ExpiredDayCell key={day} day={day} />
              );
            }

            if (isFutureDay(day)) {
              return (
                <FutureDayCell
                  key={day}
                  day={day}
                  onActivateDay={activateDay}
                />
              );
            }

            return (
              <ActiveDayCell
                key={day}
                day={day}
                onActivateDay={activateDay}
              />
            );
          })}
        </Grid>
      </div>

      <RewardSheet
        isOpen={showSheet}
        content={content}
        onClose={() => setShowSheet(false)}
      />

    </Fragment>
  );
};

export default Calendar;
