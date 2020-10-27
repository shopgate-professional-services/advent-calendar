import shuffle from 'lodash/shuffle';
import { calendarGrid } from './config';

const { randomizeNumbers } = calendarGrid;

let getNowDate;
if (process.env.NODE_ENV === 'development') {
  getNowDate = () => new Date((window.Engage.date || new Date()).getTime());
} else {
  getNowDate = () => new Date();
}

let days;

/**
 * @returns {Array}
 */
export const getCalendarDays = () => {
  if (!days) {
    days = new Array(24)
      .fill(0)
      .map((d, ind) => ind + 1);

    if (randomizeNumbers) {
      days = shuffle(days);
    }
  }
  return days;
};

/**
 * @return {boolean}
 */
export const isCalendarAllowed = () => {
  const today = getNowDate();

  if (today.getMonth() !== 11) {
    return false;
  }

  const day = today.getDate();
  return day >= 1 && day <= 24;
};

/**
 * @param {number} day .
 * @return {boolean}
 */
export const isDayExpired = (day) => {
  if (day < 1 || day > 24) {
    return true;
  }

  const todayStart = getNowDate();
  todayStart.setHours(0, 0, 0);

  const date = getNowDate();
  date.setDate(day);

  return date < todayStart;
};

/**
 * @param {number} day .
 * @return {boolean}
 */
export const isFutureDay = (day) => {
  if (day < 1 || day > 24) {
    return false;
  }

  const todayEnd = getNowDate();
  todayEnd.setHours(23, 59, 59);

  const date = getNowDate();
  date.setDate(day);

  return date > todayEnd;
};

/**
 * @return {number}
 */
export const getCountDownSeconds = () => {
  const start = getNowDate();
  start.setMonth(11, 1);
  start.setHours(0, 0, 0);

  const diff = getNowDate().getTime() - Date.now();

  return (start.getTime() - diff) / 1000;
};
