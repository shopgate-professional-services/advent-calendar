import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const styles = {
  wrapper: css({
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    borderRadius: 'inherit',
  }),
};

/**
 * @returns {JSX}
 */
const Clickable = ({ children, onClick }) => (
  <div role="button" onClick={onClick} className={styles.wrapper}>
    {children}
  </div>
);

Clickable.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Clickable;
