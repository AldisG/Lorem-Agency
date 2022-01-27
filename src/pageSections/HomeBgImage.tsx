import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { imageContent } from '../other/framerMotionAnims';
import { listOfBgImg } from '../other/listOfBgImg';

type Props = {
  imgIndex: number;
};

const HomeBgImage: FC<Props> = ({ imgIndex }) => {
  // Initialize framer motion animation on bgImg change
  const [rerenderBg, setRerenderBg] = useState(false);

  useEffect(() => {
    setRerenderBg(true);
    const timer = setTimeout(() => {
      setRerenderBg(false);
    }, 1);
    return () => {
      timer;
    };
  }, [imgIndex]);

  return (
    <>
      {rerenderBg && ''}

      {!rerenderBg && (
        <motion.div
          style={{ backgroundImage: `url(${listOfBgImg[imgIndex]})` }}
          className="img-container"
          variants={imageContent}
          initial="start"
          animate="end"
        />
      )}
    </>
  );
};

export default HomeBgImage;
