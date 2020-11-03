import React from 'react';
import Snowflake from './components/Snowflake';
import { canvas } from './styles';

/**
 * @returns {JSX}
 */
const Snowfall = () => (
  <div className={canvas}>
    {new Array(30)
      .fill(0)
      .map((i, ind) => ind)
      .map((el, ind) => (
        <Snowflake
          key={el}
          style={{
            left: 40 * ind * 0.25,
            animationDelay: `${(Math.random() * 30).toFixed(2)}s`,
          }}
        />
      ))}
  </div>
);

export default Snowfall;
