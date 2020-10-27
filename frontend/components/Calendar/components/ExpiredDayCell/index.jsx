import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@shopgate/engage/components';
import { styles } from '../../styles';

/**
 * @returns {JSX}
 */
const ExpiredDayCell = ({ day }) => (
  <Grid.Item shrink={0} className={`${styles.gridItem} ${styles.gridItemExpired}`}>
    <span>{day}</span>
  </Grid.Item>
);

ExpiredDayCell.propTypes = {
  day: PropTypes.node.isRequired,
};

export default ExpiredDayCell;
