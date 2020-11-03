import { css } from 'glamor';
import { calendarGrid } from '../../config';

const { styles: configStyles } = calendarGrid;

export const styles = {
  gridWrapper: css({
    position: 'relative',
  }).toString(),
  grid: css({
    width: '100%',
    borderRadius: '20px',
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
  }, configStyles.grid),
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
  }, configStyles.gridItem),
  gridItemActive: css({
    background: '#A70F09',
  }, configStyles.active),
  gridItemFuture: css({
    background: '#A70F09',
  }, configStyles.future),
  gridItemExpired: css({
    background: '#2c2c2c',
  }, configStyles.expired),
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
