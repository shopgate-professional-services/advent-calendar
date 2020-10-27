import { css } from 'glamor';

export const canvas = css({
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 2,
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}).toString();

const fallFrames = css.keyframes({
  '0%': { opacity: 0 },
  '3%': { opacity: 0.9 },
  '90%': { opacity: 0.9 },
  '100%': {
    transform: 'translate(0, 97vh)',
    opacity: 0,
  },
});

export const snowFlake = css({
  color: '#fff',
  opacity: '0',
  width: 40,
  animation: `${fallFrames} 16s linear infinite`,
}).toString();
