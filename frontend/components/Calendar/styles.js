import { css } from 'glamor';
import { calendarGrid } from '../../config';

const { bgImage, styles: configStyles } = calendarGrid;

export const styles = {
  grid: css({
    width: '100%',
    borderRadius: '20px',
    flexWrap: 'wrap',
    ' > *:nth-child(1)': {
      borderRadius: '20px 0 0px 0px',
    },
    ' > *:nth-child(4)': {
      borderRadius: '0px 20px 0px 0px',
    },
    ' > *:nth-child(21)': {
      borderRadius: '0px 0 0px 20px',
    },
    ' > *:nth-child(24)': {
      borderRadius: '0px 0 20px 0px',
    },
  }, bgImage && {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }).toString(),
  gridItem: css({
    width: 'calc(25% - 2px)',
    height: 90,
    border: '1px solid #D3D3D3',
    fontWeight: 500,
    fontSize: '1.5rem',
    color: '#D3D3D3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }).toString(),
  gridItemActive: css({
    background: '#A70F09',
  }, configStyles.active).toString(),
  gridItemExpired: css({
    background: '#2c2c2c',
  }, configStyles.expired).toString(),
  flippingSide: css({
    position: 'absolute',
    maxWidth: '90px',
    maxHeight: '80px',
    width: '50ch',
    height: '50ch',
    cursor: 'pointer',
    willChange: 'transform, opacity',
  }),
};
