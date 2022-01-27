import { FC } from 'react';
import { motion } from 'framer-motion';
import PlayNextBtn from './PlayNextBtn';
import { textContent } from '../other/framerMotionAnims';

type SwitchNextProps = {
  color: string;
  handleClick: () => void;
};

const SwitchToNextHome: FC<SwitchNextProps> = ({ color, handleClick }) => {
  return (
    <motion.div
      onClick={() => handleClick()}
      variants={textContent}
      whileHover={{ scale: 1.2 }}
    >
      <PlayNextBtn bgColor={color} />
    </motion.div>
  );
};

export default SwitchToNextHome;
