import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@shopgate/engage/components';
import FlippingCard from '../../../FlippingCard';
import { styles } from '../../styles';

/**
 * @returns {JSX}
 */
const ActiveDayCell = ({ day, onActivateDay }) => (
  <Grid.Item shrink={0} className={styles.gridItem}>
    <FlippingCard
      front={<span>{day}</span>}
      back={<span>{'😊'}</span>}
      onFlip={() => onActivateDay(day)}
      className={styles.gridItemActive}
    />
  </Grid.Item>
);

ActiveDayCell.propTypes = {
  day: PropTypes.node.isRequired,
  onActivateDay: PropTypes.func.isRequired,
};

export default ActiveDayCell;
