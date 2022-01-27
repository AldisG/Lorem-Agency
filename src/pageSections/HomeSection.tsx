import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { headerTextContent } from '../other/headerTextContent';
import { textContent } from '../other/framerMotionAnims';

import FooterContainer from '../components/FooterContainer';
import PlayNextBtn from '../components/PlayNextBtn';
import SocialsContainer from '../components/SocialsContainer';
import '../styles/buttons.scss';
import SwitchToNextHome from '../components/SwitchToNextHome';

type HomeProps = {
  indexOfHomeInfo: number;
  changeHeaderContent: () => void;
};

const HomeSection: FC<HomeProps> = ({
  indexOfHomeInfo,
  changeHeaderContent,
}) => {
  const { header, services, category, links, bgTitle, color } =
    headerTextContent[indexOfHomeInfo];
  const [pageReseted, setpageReseted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpageReseted(true);
    }, 10);
    timer;
    return () => {
      timer;
    };
  }, [pageReseted]);

  const handleClick = () => {
    changeHeaderContent();
    setpageReseted(false);
  };

  return (
    <section className="home-section-wrapper">
      <SocialsContainer />
      {!pageReseted && ''}

      {pageReseted && (
        <>
          <motion.div
            className="company-description-wrapper flex-c-c"
            variants={textContent}
            initial={'start'}
            animate={'end'}
          >
            <motion.h1 className="company-desc-title" variants={textContent}>
              {header}
            </motion.h1>

            <motion.span>{category}</motion.span>
            <motion.div
              className="company-desc-description-wrapper"
              variants={textContent}
            >
              <strong className="company-desc-description">{services}</strong>
              <motion.span whileHover={{ scale: 1.2 }}>
                <Link to="/" className="button-go-to btn">
                  See more
                </Link>
              </motion.span>
            </motion.div>

            <SwitchToNextHome color={color} handleClick={handleClick} />
          </motion.div>

          <FooterContainer
            indexOfHomeInfo={indexOfHomeInfo + 1}
            headerTextIndex={headerTextContent.length}
          />
        </>
      )}
    </section>
  );
};

export default HomeSection;
