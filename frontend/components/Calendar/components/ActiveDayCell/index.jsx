import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@shopgate/engage/components';
import FlippingCard from '../../../FlippingCard';
import { styles } from '../../styles';
import { getCalendarDayConfig } from '../../../../helpers';

/**
 * @returns {JSX}
 */
const ActiveDayCell = ({ day, onActivateDay }) => {
  const {
    gridLabel: {
      front,
      back,
    } = {},
    gridStyles: {
      active: {
        front: frontStyle,
        back: backStyle,
      } = {},
    } = {},
  } = getCalendarDayConfig(day) || {};

  return (
    <Grid.Item shrink={0} className={styles.gridItem.toString()}>
      <FlippingCard
        front={<span>{front || day}</span>}
        back={<span>{back || '😊'}</span>}
        onFlip={() => onActivateDay(day)}
        className={styles.gridItemActive.toString()}
        frontStyle={frontStyle}
        backStyle={backStyle}
      />
    </Grid.Item>
  );
};

ActiveDayCell.propTypes = {
  day: PropTypes.number.isRequired,
  onActivateDay: PropTypes.func.isRequired,
};

export default ActiveDayCell;
