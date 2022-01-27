import { FC } from 'react';
import Arrow from '../img/play.png';

type Props = {
  bgColor: string;
};

const PlayNextBtn: FC<Props> = ({ bgColor }) => {
  return (
    <button
      className="next-slide-btn btn flex-c-c"
      style={{ backgroundColor: bgColor }}
    >
      <img className="next-slide-btn__icon" src={Arrow} alt={Arrow} />
    </button>
  );
};

export default PlayNextBtn;
