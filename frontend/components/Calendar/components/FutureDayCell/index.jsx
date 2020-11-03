import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Grid } from '@shopgate/engage/components';
import { styles } from '../../styles';
import { getCalendarDayConfig } from '../../../../helpers';

/**
 * @returns {JSX}
 */
const FutureDayCell = ({ day, onActivateDay }) => {
  const {
    gridLabel: { front } = {},
    gridStyles: {
      future: {
        front: frontStyle,
      } = {},
    } = {},
  } = getCalendarDayConfig(day) || {};

  return (
    <Grid.Item
      shrink={0}
      className={css(
        styles.gridItem,
        styles.gridItemFuture,
        frontStyle
      ).toString()}
      onClick={() => onActivateDay(day)}
    >
      <span>{front || day}</span>
    </Grid.Item>
  );
};

FutureDayCell.propTypes = {
  day: PropTypes.node.isRequired,
  onActivateDay: PropTypes.func.isRequired,
};

export default FutureDayCell;
