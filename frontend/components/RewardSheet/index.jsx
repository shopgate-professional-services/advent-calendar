import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  SheetDrawer, HtmlSanitizer, Link, SurroundPortals,
} from '@shopgate/engage/components';
import { rewardSheet } from '../../config';

const { styles: rewardSheetStyles, headerImage } = rewardSheet;

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
  }, rewardSheetStyles.content).toString(),
  title: css({
    color: '#111111',
    fontSize: '2rem',
    fontWeight: 600,
  }, rewardSheetStyles.title),
  subTitle: css({
    color: '#111111',
    fontSize: '1.25rem',
  }, rewardSheetStyles.subTitle),
  text: css({
    textAlign: 'center',
    fontSize: '0.875rem',
  }, rewardSheetStyles.text).toString(),
  link: css({
    display: 'flex',
    justifyContent: 'center',
    color: '#C62121',
    textTransform: 'uppercase',
    fontWeight: 600,
  }, rewardSheetStyles.link).toString(),
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
    <SurroundPortals portalName="ps.advent-calendar.reward-sheet" portalProps={content}>
      <div className={styles.content}>
        {content && (
        <Fragment>
          {headerImage && (
            <div>
              <img src={headerImage} alt="" />
            </div>
          )}
          <div className={styles.title}>
            {content.title}
          </div>
          {content.subTitle && (
            <div className={styles.subTitle}>
              {content.subTitle}
            </div>
          )}
          {content.image && (
            <div>
              <img src={content.image} alt="" />
            </div>
          )}
          <HtmlSanitizer className={styles.text}>
            {content.content}
          </HtmlSanitizer>
          <Link href={content.buttonLink} className={styles.link}>
            {content.buttonText}
          </Link>
        </Fragment>
        )}
      </div>
    </SurroundPortals>
  </SheetDrawer>
);

RewardSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonText: PropTypes.string,
  }),
};

RewardSheet.defaultProps = {
  content: null,
};

export default RewardSheet;
