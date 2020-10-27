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
      .map(el => (
        <Snowflake
          key={el}
          style={{
            animationDelay: `${(Math.random() * 16).toFixed(2)}s`,
          }}
        />
      ))}
  </div>
);

export default Snowfall;
