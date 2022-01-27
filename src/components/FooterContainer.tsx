import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  footerPagesContent,
  footerStatisticsContent,
} from '../other/framerMotionAnims';
import '../styles/Footer.scss';

type FooterProps = {
  indexOfHomeInfo: number;
  headerTextIndex: number;
};
const FooterContainer: FC<FooterProps> = ({
  indexOfHomeInfo,
  headerTextIndex,
}) => {
  return (
    <div className="home-footer">
      <motion.span
        className="page-counter-wrapper"
        variants={footerPagesContent}
        initial="start"
        animate="end"
      >
        <strong className="page-counter__counter">
          {`${indexOfHomeInfo}/${headerTextIndex} `}
        </strong>
        page
      </motion.span>
      <motion.span
        variants={footerStatisticsContent}
        initial="start"
        animate="end"
      >
        customer review statistics
      </motion.span>
    </div>
  );
};

export default FooterContainer;
