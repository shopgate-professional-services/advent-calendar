import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { SheetDrawer, HtmlSanitizer, Link } from '@shopgate/engage/components';

const styles = {
  sheet: css({
    borderRadius: '10px 10px 0 0',
  }).toString(),
  content: css({
    padding: '1.5rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ' > *': {
      margin: '0.5rem',
    },
  }).toString(),
  title: css({
    color: '#111111',
    fontSize: '2rem',
    fontWeight: 600,
  }),
  subTitle: css({
    color: '#111111',
    fontSize: '1.25rem',
  }),
  text: css({
    textAlign: 'center',
    fontSize: '0.875rem',
  }).toString(),
  link: css({
    display: 'flex',
    justifyContent: 'center',
    color: '#C62121',
    textTransform: 'uppercase',
    fontWeight: 600,
  }).toString(),
};

/**
 * @return {React.Element}
 */
const RewardSheet = ({ isOpen, content, onClose }) => (
  <SheetDrawer
    isOpen={isOpen}
    className={styles.sheet}
    contentClassName={styles.content}
    onClose={onClose}
  >
    <div className={styles.content}>
      {content && (
        <Fragment>
          <div>
            <img src="https://shopgate-public.s3.eu-west-1.amazonaws.com/ps/advent/v1/bell.png" alt=""/>
          </div>
          <div className={styles.title}>
            {content.title}
          </div>
          {content.subTitle && (
            <div className={styles.subTitle}>
              {content.title}
            </div>
          )}
          <div>
            <img src={content.image} alt="" />
          </div>
          <HtmlSanitizer className={styles.text}>
            {content.content}
          </HtmlSanitizer>
          <Link href={content.buttonLink} className={styles.link}>
            {content.buttonText}
          </Link>
        </Fragment>
      )}
    </div>
  </SheetDrawer>
);

RewardSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape(),
};

RewardSheet.defaultProps = {
  content: null,
};

export default RewardSheet;
