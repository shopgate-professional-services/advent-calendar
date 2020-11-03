import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useSpring, animated as a } from 'react-spring';
import Clickable from '../Clickable';

export const styles = {
  card: css({
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    cursor: 'pointer',
    willChange: 'transform, opacity',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit',
  }),
};

/**
 * @returns {JSX}
 */
const FlippingCard = ({
  front, back, onFlip, className, frontStyle, backStyle,
}) => {
  const [flipped, setFlipped] = useState(false);

  const flip = useCallback(() => {
    if (!flipped) {
      setFlipped(true);
    }
    onFlip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onFlip]);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(90px) rotateY(${flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80,
    },
  });

  return (
    <Clickable onClick={flip}>
      <a.div
        className={`${styles.card} ${className}`}
        style={{
          ...frontStyle,
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        {front}
      </a.div>
      <a.div
        className={`${styles.card} ${className}`}
        style={{
          ...backStyle,
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        {back}
      </a.div>
    </Clickable>
  );
};

FlippingCard.propTypes = {
  back: PropTypes.node.isRequired,
  front: PropTypes.node.isRequired,
  onFlip: PropTypes.func.isRequired,
  backStyle: PropTypes.shape(),
  className: PropTypes.string,
  frontStyle: PropTypes.shape(),
};

FlippingCard.defaultProps = {
  backStyle: null,
  className: '',
  frontStyle: null,
};

export default FlippingCard;
