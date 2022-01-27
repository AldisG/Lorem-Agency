import { FC } from 'react';

type socItemProps = {
  socItem: string;
};

const SocialIcon: FC<socItemProps> = ({ socItem }) => {
  return (
    <button className="btn soc flex-c-c">
      <img className="soc-icon" src={socItem} alt={socItem} />
    </button>
  );
};

export default SocialIcon;
