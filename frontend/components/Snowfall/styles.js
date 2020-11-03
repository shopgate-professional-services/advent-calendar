import { css } from 'glamor';

export const canvas = css({
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 2,
  overflow: 'hidden',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}).toString();

const fallFrames = css.keyframes({
  '0%': { opacity: 0 },
  '3%': { opacity: 0.9 },
  '50%': { opacity: 0.9 },
  '60%': { opacity: 0.5 },
  '80%': {
    opacity: 0,
    transform: 'translate(0, 97vh)',
  },
});

export const snowFlake = css({
  position: 'absolute',
  top: 0,
  left: 0,
  color: '#fff',
  opacity: 0,
  height: 40,
  width: 40,
  animation: `${fallFrames} 16s linear infinite`,
}).toString();
