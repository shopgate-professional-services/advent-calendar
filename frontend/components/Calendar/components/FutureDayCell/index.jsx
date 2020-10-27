import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@shopgate/engage/components';
import { styles } from '../../styles';

/**
 * @returns {JSX}
 */
const FutureDayCell = ({ day, onActivateDay }) => (
  <Grid.Item
    shrink={0}
    className={`${styles.gridItem} ${styles.gridItemActive}`}
    onClick={() => onActivateDay(day)}
  >
    <span>{day}</span>
  </Grid.Item>
);

FutureDayCell.propTypes = {
  day: PropTypes.node.isRequired,
  onActivateDay: PropTypes.func.isRequired,
};

export default FutureDayCell;
